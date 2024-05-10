/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，从同一个方向看总共有多少种不同的方法？
 * 俩种解法：类似跳楼梯，1阶和2阶
 * a 第n个矩形的拍法由 第n-1个和第n-2个决定
 * f(n) = f(n-1) + f(n-2)
 * b 动态规划
*/

const coverage1 = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  if (n > 2) {
    return coverage1(n-1) + coverage1(n-2)
  }
}

console.log(coverage1(4))

const coverage2 = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  let [left, right] = [1, 2]
  if (n > 2) {
    for (let i = 2; i < n;i++) {
      [left, right] = [right, left + right]
    }
  }

  return right
}

console.log(coverage2(4))