/**
题目描述:
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
[
  [1,2,8,9],
  [2,4,9,12],
  [4,7,10,13],
  [6,8,11,15],
  [8,9,12,18],
]
给定 target = 7，返回 true。
给定 target = 3，返回 false。
 * **/

/**
三种解法：
1 暴力法 
遍历二维数组 O(n2)
空间复杂度：O(1)

2 从左下找
3 从右下找
用某行最小或某列最大与 target 比较，每次可剔除一整行或一整列
时间复杂度：O(row+column)，其中row为行数，column为列数，最坏情况下，需要遍历row+column次。
空间复杂度：O(1)

**/

const find = (target, arr) => {
  const row = arr.length - 1; // 行
  const column = arr[0].length; // 列

  let n = 0; // 一维坐标
  let m = column - 1; // 二维坐标
  let status = false;

  while (n <= row && m >= 0) {
    if (target < arr[n][m]) {
      m--;
    } else if (target === arr[n][m]) {
      return true;
    } else {
      n++;
    }
  }

  return false;
}

const arr = [
  [1,2,8,9],
  [2,4,9,12],
  [4,7,10,13],
  [6,8,11,15],
  [8,9,12,18],
]

console.log(find(12, arr));
