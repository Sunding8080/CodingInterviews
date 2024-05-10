/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）
 * 该问题类似于斐波拉契数列做法
 * 解法:
 * 1 递归
 * f(n) = f(n-1) + f(n-2)
 * 2 动态规划
 * 
*/

const jumpFloor1 = (n) => {
  if (n <= 1) {
    return 1
  }

  let sum = 0
  if (n - 2 >= 0) {
    sum += jumpFloor1(n - 1) + jumpFloor1(n - 2)
  }

  return sum
}

console.log(jumpFloor1(4))

const jumpFloor2 = (n) => {
  if (n <= 1) {
    return 1
  }

  let pre = 1
  let next = 1
  
  for (let i = 1; i < n; i++) {
    [pre, next] = [next, pre + next]
  }
  
  return next
}

console.log(jumpFloor2(2))

