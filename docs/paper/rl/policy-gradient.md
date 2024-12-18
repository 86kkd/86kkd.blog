# policy-gradient

## What is Policy-gradient

Policy-gradient methods can learn a stochastic policy 
while value functions can’t.

This has two consequences:

- We don’t need to implement an exploration/exploitation trade-off by hand. 
Since we output a probability distribution over actions, 
the agent explores the state space without always taking 
the same trajectory.

- We also get rid of the problem of perceptual aliasing. 
Perceptual aliasing is when two states seem (or are) 
the same but need different actions.

>[!INFO]
>`perceptual aliasing` 是因为value based的方式对于一个状态的最优解是固定的,
>所以导致模型无法很好的处理要求对一个状态进行随机做出的决策。

