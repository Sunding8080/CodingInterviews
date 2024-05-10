/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）
 * 解法：
 * 1 递归
 * f(n) = f(n-1) + f(n-2)
 * 
 * 2 动态规划
 * 
*/

const fibo1 = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (n > 1) {
    return fibo1(n - 1) + fibo1(n - 2)
  }
}

console.log(fibo1(4));

const fibo2 = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1

  let left = 0
  let right = 1

  for (let i = 1; i < n; i++) {
    [left, right] = [right, left + right]
  }
  return right
}

console.log(fibo2(6));