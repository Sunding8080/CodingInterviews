/**
 * 输入一个链表，输出一个链表，该输出链表包含原链表中从倒数第k个结点至尾节点的全部节点。
 * 如果该链表长度小于k，请返回一个长度为 0 的链表。
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const i = 3

const getLastArr = (arr, i) => {
  let index1 = i

  let index2 = 0

  while (arr[index1] !== undefined) {
    index1++
    index2++
  }

  return arr.slice(index2)
}

console.log(getLastArr(arr, i))
