/**
题目描述:
输入一个链表，按链表从尾到头的顺序返回一个ArrayList

输入
{67,0,24,58}
返回值
[58,24,0,67]

**/

// 生成一个链表
function LinkedList(arr) {
  let firstNode = null;
  let currentNode = null;

  for (let item of arr) {
    if (!currentNode) {
      currentNode = {
        value: item,
        next: null,
      };
      firstNode = currentNode;
    } else {
      currentNode.next = {
        value: item,
        next: null,
      };
      currentNode = currentNode.next;
    }
  }

  return firstNode;
}

// 生成一个链表
const list = LinkedList([58,24,0,67]);

/**
时间复杂度：O(n)
空间复杂度：O(n)
**/ 
function getListValue(list) {
  const result = [];

  let node = list;
  while (node) {
    result.push(node.value);
    node = node.next;
  }

  return result.reverse();
}

const result = getListValue(list);
console.log(result);
