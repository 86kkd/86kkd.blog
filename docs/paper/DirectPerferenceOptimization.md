# Direct Preference Optimization (DPO)
## 什么是DPO
DPO是一种用于大语言模型（LLM）对齐的新方法，它的主要目的是让AI模型的输出更好地符合人类偏好。
它是RLHF（基于人类反馈的强化学习）的一种替代方案,该方法于2023年提出，
显著简化了语言模型与人类偏好的对齐过程

## 在DPO之前提出之前

在 DPO 提出之前，RLHF 的训练过程通常分为两个阶段：首先是监督微调（SFT），然后是强化学习（RL）。
### 第一步是训练 reward model。

训练数据是同一个 prompt 的 2 个回答，让人或 GPT4 标注哪个回答更好，reward model 会去优化如下的 loss
$$
  \max_{r_\phi} \mathbb{E}_{(x, y_{win}, y_{loss}) \sim D} [\log \sigma(r_\phi(x, y_{win}) - r_\phi (x, y_{loss}))]
$$

其中 就是 reward model 用来给回答打分。 是训练数据集， 是 prompt， 和 分别是好的回答和不好的回答。也就是说，要尽可能让好的回答的得分比不好的回答高，拉大他们之间的差别。
### 第二步是用 RL 算法来提升模型的得分。 。
loss 如下：
$$
  \max_{\pi_{\theta}} \big\{ \mathbb{E}_{x \sim D,y \sim \pi_{\theta}(y|x)} [r_\phi(x, y) - \beta \mathbb{D}_{\text{KL}}[\pi_{\theta} || \pi_{ref}]] \big\}
$$
其中$\pi_{\theta}$是我们在训练的 LLM，$\pi_{ref}$是训练的初始值。这个 loss 意思是希望 LLM 输出的回答的评分能尽可能高，同时$\pi_{\theta}$不要偏离$\pi_{ref}$太多，保证它还能正常做回答，不要训成一个评分很高但是回答乱码的东西。

## DPO 的贡献

### DPO 的公式推导

$$
\begin{aligned}
&\max_{\pi_\theta}\left\{\mathbb{E}_{x\sim\mathcal{D},y\sim\pi_\theta(y|x)}[r_\phi(x,y)] - \beta\mathbb{D}_{\text{KL}}[\pi_\theta(y|x)||\pi_{\text{ref}}(y|x)]\right\}  \\
&=\max_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D},y\sim\pi_\theta(y|x)}\left[r_\phi(x,y) - \beta\log\frac{\pi_\theta(y|x)}{\pi_{\text{ref}}(y|x)}\right]                  \\
&=\min_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D},y\sim\pi_\theta(y|x)}\left[\log\frac{\pi_\theta(y|x)}{\pi_{\text{ref}}(y|x)} - \frac{1}{\beta}r_\phi(x,y)\right]        \\
&=\min_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D},y\sim\pi_\theta(y|x)}\left[\log\frac{\pi_\theta(y|x)}{\pi_{\text{ref}}(y|x)e^{r_\phi(x,y)/\beta}}\right]
\end{aligned}
$$
如果我们归一化一下分母，即取
$
  Z(x) = \sum_y \pi_{\text{ref}}(y|x)e^{r_\phi(x,y)/\beta}
$

::: tip 

> 注意这里$Z(x)$是关于$x$的函数与$y$无关,这里很重要因为我们的loss是不需要计算关于输入$x$的损失的
> 所以下面变换时可以忽略$\log Z(x)$

:::

也就可以构造出一个新的概率分布：

$\pi^*(y|x) = \pi_{\text{ref}}(y|x)e^{r_\phi(x,y)/\beta} / Z(x)$

我们将归一化后的新概率分布替换原来的分子那么我们可以将优化目标重新表示为：

$$
\begin{aligned}
&\min_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D},y\sim\pi_\theta(y|x)}\left[\log\frac{\pi_\theta(y|x)}{\pi_{\text{ref}}(y|x)e^{r_\phi(x,y)/\beta}}\right] \\
&= \min_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D},y\sim\pi_\theta(y|x)}\left[\log\frac{\pi_\theta(y|x)}{\pi^*(y|x)} - \log Z(x)\right] \\
&= \min_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D},y\sim\pi_\theta(y|x)}\left[\log\frac{\pi_\theta(y|x)}{\pi^*(y|x)}\right] \\
&= \min_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D}}\mathbb{D}_{\text{KL}}[\pi_\theta(y|x)||\pi^*(y|x)]
\end{aligned}
$$

::: tip 

> 这里有一个非常重要的point我们将
> $\max_{\pi_\theta} \big\{ \mathbb{E}_{x \sim D,y \sim \pi_{\theta}(y|x)} [r_\phi(x, y) - \beta \mathbb{D}_{\text{KL}}[\pi_{\theta} || \pi_{ref}]] \big\}$
> 表达式中的
> $\max_{\pi_\theta}\big\{\mathbb{E}_{x \sim D,y \sim \pi_{\theta}(y|x)}r_\phi(x,y)\big\}$
> 巧妙的转换成其他新loss的KL散度的形式，
>
>`The key point is` 我们不需要再面对公式中
> $\mathbb{E}_{y \sim \pi_{\theta}(y|x)}$
> sample操作，这样我们可以进行梯度下降backprop
> 同时我们将loss转换成了$\pi_\theta(y|x)$和$\pi^*(y|x)$的KL散度。这非常的amazing啊！
> 我们目前只需要最小化新的概率分布$\pi^x(y|x)$和$\pi_\theta(y|x)$
> 就完成了之前的复杂的RL算法

:::

现在的问题是如何get$\pi(y|x)^*$的概率分布，我们可以通过$\pi^*(y|x)$的定义式
$\pi^*(y|x) = \pi_{\text{ref}}(y|x)e^{r_\phi(x,y)/\beta} / Z(x)$
get到$\pi^*(y|x)$的关系，那么我们做一些简单的变换可以得到
$r_\phi(x, y) = \beta \log\frac{\pi^*(y|x)}{\pi_{ref}(y|x)} + \beta \log Z(x)$

这时候我们将$r_\phi(x,y)$的表达式直接带入到上面的reward model的loss function

$$
  \max_{r_\phi} \mathbb{E}_{(x, y_{win}, y_{loss}) \sim D} [\log \sigma(r_\phi(x, y_{win}) - r_\phi (x, y_{loss}))]
$$

就会得到下面的表达式

$$
\max_{\pi^*} \left\{ \mathbb{E}_{(x,y_{\text{win}},y_{\text{lose}}) \sim \mathcal{D}} \left[ \log \sigma \left( \beta \log \frac{\pi^*(y_{\text{win}}|x)}{\pi_{\text{ref}}(y_{\text{win}}|x)} - \beta \log \frac{\pi^*(y_{\text{lose}}|x)}{\pi_{\text{ref}}(y_{\text{lose}}|x)} \right) \right] \right\}
$$

OK 现在我们只差最后一步,在上面推导出的表达式
$\min_{\pi_\theta}\mathbb{E}_{x\sim\mathcal{D}}\mathbb{D}_{\text{KL}}[\pi_\theta(y|x)||\pi^*(y|x)]$
中我们可以发现我们实现需要的是最小化$\pi_\theta(y|x)$和$\pi^*(y|x)$的散度,
那么当我们令散度等于0时实际我么就是在优化$\pi_\theta(y|x)$

所以我们不如直接将loss直接写成这样
$$
\max_{\pi^*} \left\{ \mathbb{E}_{(x,y_{\text{win}},y_{\text{lose}}) \sim \mathcal{D}} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_{\text{win}}|x)}{\pi_{\text{ref}}(y_{\text{win}}|x)} - \beta \log \frac{\pi_\theta(y_{\text{lose}}|x)}{\pi_{\text{ref}}(y_{\text{lose}}|x)} \right) \right] \right\}
$$

这非常的amazing啊!我们竟然可以通过这个trick将两阶段的train简化成一阶段，同时还不用优化了sampling的操作让损失可以直接backprop

## 实际应用

- 可以用于大语言模型的微调和对齐

- 在实践中比传统RLHF方法更容易实现和部署

- 已经在多个开源项目中得到应用和验证

## 结论

通过以上的推导，我们可以看到DPO方法通过将RLHF的两阶段训练简化为单阶段训练，大大简化了训练过程。
同时使用KL 散度的形式来优化训练过程使得模型可以直接backprop而不需要用trick去解决sample的问题并使得训练内存需求得以缓解。
