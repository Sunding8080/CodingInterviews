/**
 * 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？
 * 如下：
 * 4 ： 2*2
 * 5 ： 2*3
 * 6 ： 3*3
 * 7 ： 2*2*3 或者4*3
 * 8 ： 2*3*3
 * 9 ： 3*3*3
 * 10：2*2*3*3 或者4*3*3
 * 11：2*3*3*3
 * 12：3*3*3*3
 * 13：2*2*3*3*3 或者4*3*3*3
 *
 * 总结规律：首先判断k[0]到k[m]可能有哪些数字，实际上只可能是2或者3。
 */

// function cutRope(number) {
//   // write code here
//   if (number < 4) return number - 1
//   var remainder = number % 3
//   if (!remainder) return Math.pow(3, number / 3)
//   return remainder == 1
//     ? parseInt(Math.pow(3, parseInt(number / 3) - 1)) << 2
//     : parseInt(Math.pow(3, parseInt(number / 3))) << 1
// }

function cutRope(number) {
  if (number < 4) {
    return number
  }

  const remainder = number % 3
  const times = Math.floor(number / 3)

  // 余数取0、1、2
  if (remainder === 0) {
    return Math.pow(3, times)
  } else if (remainder === 1) {
    return Math.pow(3, times - 1) * 4
  } else {
    return Math.pow(3, times) * 2
  }
}

console.log(cutRope(10))
