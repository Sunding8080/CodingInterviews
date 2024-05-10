/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶有多少种跳法:
 * 有俩种解法：
 * 1 暴力枚举 递归
 *  f(n) = f(n-1) + ... + f(1) + f(0)
 *  f(n-1) = f(n-2) + ... + f(1) + f(0)
 * 2 动态规划
 * f(n) = 2f(n-1)
 * f(n) = Math.pow(2, n - 1)
*/

const jumpFloor1 = (n) => {
  if (n <= 1) {
    return 1
  }

  let num = 0  
  while (--n >= 0) {
    num += jumpFloor1(n)
  }

  return num
}

console.log(jumpFloor1(4))

const jumpFloor2 = (n) => {
  return Math.pow(2, n - 1)
}

console.log(jumpFloor2(3))
