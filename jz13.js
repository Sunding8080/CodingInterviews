/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组* 的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * 解法：
 * 取余数判断奇偶，存入数组，并合并俩个数组
*/

const sort = (arr) => {
  const odd = [] // 奇数
  const even = [] // 偶数

  for (let item of arr) {
    if (item % 2 === 1) {
      odd.push(item)
    } else {
      even.push(item)
    }
  }

  return odd.concat(even)
}

const arr = [2, 1, 3, 4, 5, 7, 8, 10]
console.log(sort(arr))
