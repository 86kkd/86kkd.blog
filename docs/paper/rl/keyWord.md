# 专业名词汇总

本markdown汇总了深度强化学习的专业名词和概念,所有内容仅个人观点，如有问题欢迎指正

## Off-policy

基于Off-policy based 方法可以从其他策略(如随机策略)生成的经验中学习,而不必严格遵循正在学习的策略。
这使得它能够更灵活地利用历史数据或探索性行为。

## Value-based

Value-based的方法关注的是学习动作价值函数,而不是直接学习策略。该函数估计在给定状态下采取特定动作的长期回报。

## mong the value-based methods, we can find two main strategies

- The state-value function. For each state, the state-value function is the expected return if the agent starts in that state and follows the policy until the end.
- The action-value function. In contrast to the state-value function, the action-value calculates for each state and action pair the expected return if the agent starts in that state, takes that action, and then follows the policy forever after.

## 时序差分(TD)

这是一种结合了蒙特卡洛方法和动态规划思想的学习方法。
TD方法通过估计的即时奖励和下一状态的估计值来更新当前状态的估计值,而不需要等待整个回合结束。

## 动作价值函数
