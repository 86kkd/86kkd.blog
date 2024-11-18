# Before Starting

Here is the basic information you need to know before diving into Reinforcement Learning.

## What are the two main approaches to find optimal policy?

### Policy-based methods

we train the policy directly to learn which action to take given a state.

### Value-based methods

we train a value function to learn which state is more valuable and use this value function to take the action that leads to it.

### on/off policy

定义

- On-policy： $\pi_{behavior}=\pi_{target}$

- Off-policy： $\pi_{behavior}≠\pi_{target}$

直接说Value-based/Policy-based method是off/on policy 是不等价的,我觉得Policy-based 和on/off policy
是比较容易混淆的，所有这里有些小tips：

::: info

Value-based Methods（基于价值的方法）

- 核心思想：间接学习策略，通过学习价值函数来隐式表示策略
- 策略生成：$π(s)=argmax_a Q(s,a)$

Policy-based Methods（基于策略的方法）

- 核心思想：直接学习策略函数
- 策略表示：$πθ(a∣s)$直接输出动作概率分布

:::

#### On policy

- 定义：智能体使用当前正在学习和优化的策略（policy）来进行交互和采样数据

- 特点：学习的策略（target policy）和用于收集数据的行为策略（behavior policy）是同一个

- 典型算法：SARSA、PPO（Proximal Policy Optimization）、TRPO（Trust Region Policy Optimization）

#### Off policy

- 定义：智能体使用一个策略（behavior policy）来收集数据，但实际优化的是另一个策略（target policy)

- 特点：学习的策略和用于收集数据的策略可以是不同的

- 典型算法：Q-learning、DQN（Deep Q-Network）、SAC（Soft Actor-Critic）

#### Example:
假设在自动驾驶场景中：

    On-policy：必须用当前正在学习的驾驶策略去收集数据
    Off-policy：可以用人类驾驶数据或其他驾驶策略收集的数据来训练，更灵活且可以利用历史数据

#### 数学表示


## What is the Bellman Equation?

The Bellman equation is a recursive equation that works like this: instead of starting for each state from 
the beginning and calculating the return, 
we can consider the value of any state as

$$
R_(t+1) + \gamma * V_{St+1}
$$

The immediate reward + the discounted value of the state that follows1

## What is the difference between Monte Carlo and Temporal Difference learning methods?

### Monte Carlo methods

With [Monte Carlo methods](), we update the value function from a complete episode

- 必须等到episode结束才能获得实际的回报(return)
- 使用实际观察到的回报来更新价值函数

更新公式: $V(St) ← V(St) + α[Gt - V(St)]$其中:

- V(St)是状态St的价值估计
- α是学习率
- Gt是从时间步t到episode结束的实际累积回报

### TD learning methods

With [TD learning methods](), we update the value function from a step
- TD方法在每一步之后就可以进行学习
- 不需要等待episode结束
- 使用估计的回报(bootstrapping)来更新价值函数
更新公式: $V(St) ← V(St) + α[Rt+1 + γV(St+1) - V(St)]$ 其中:
- $R_{t+1}$是即时奖励
- $\gamma$是折扣因子
- $V_{S_{t+1}}$是下一个状态的估计价值

### 关键区别举例: 假设我们在玩一个游戏:

MC方法: 必须等到游戏完全结束后，才知道这局是赢是输，然后用最终结果来更新每个状态的价值
TD方法: 在游戏进行中的每一步都可以学习，通过当前的奖励和对下一状态的估计来更新当前状态的价值


## 现代趋势：

现代强化学习算法倾向于结合两种方法的优点：
- 使用off-policy学习提高样本效率
- 采用一些on-policy的技巧来提高稳定性

- 例如：
    - SAC使用off-policy学习但加入熵正则化

    - TD3使用off-policy学习但限制策略更新频率

