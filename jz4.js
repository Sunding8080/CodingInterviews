/**
输入某二叉树的前序遍历和中序遍历的结果， 请重建出该二叉树。 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列[1, 2, 3, 4, 5, 6, 7]
和中序遍历序列[3, 2, 4, 1, 6, 5, 7]
则重建二叉树并返回。

*解法:
先序遍历的数组，分为根、左子树、右子树，左子树数组和右子树数组又都是先序遍历
中序遍历的数组，分为根、左子树、右子树，左子树数组和右子树数组又都是中序遍历

依次递归，建立树状关系
**/

class TreeNode {
  constructor(value) {
    this.value = value
    this.leftNode = null
    this.rightNode = null
  }

  setLeftNode(node) {
    this.leftNode = node
  }

  setRightNode(node) {
    this.rightNode = node
  }
}

const getTree = (pre = [], mid = []) => {

  // 根节点在中序遍历数组的下标
  let index = mid.findIndex(item => item === pre[0])

  if (index > -1) {
    // 当前根节点
    let node = new TreeNode(pre[0]);

    // 左中序遍历数组
    const leftMid = mid.slice(0, index);
    // 右中序遍历数组
    const rightMid = mid.slice(index + 1);
    // 左先序遍历数组，并且与左中序遍历数组一样长
    const leftPre = pre.slice(1, leftMid.length + 1);
    // 右先序遍历数组，并且与右中序遍历数组一样长
    const rightPre = pre.slice(leftMid.length + 1);

    if (leftMid.length) {
      node.setLeftNode(getTree(leftPre, leftMid));
    }

    if (rightMid.length) {
      node.setRightNode(getTree(rightPre, rightMid));
    }

    return node
  } else {
    return null
  }
}

const pre = [1, 2, 4, 5, 8, 3, 6, 9, 7, 10];
const mid = [4, 2, 5, 8, 1, 9, 6, 3, 7, 10];

const node = getTree(pre, mid);
console.log(node)