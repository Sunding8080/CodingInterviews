/**
输入某二叉树的前序遍历和中序遍历的结果， 请重建出该二叉树。 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列[1, 2, 3, 4, 5, 6, 7]
和中序遍历序列[3, 2, 4, 1, 6, 5, 7]
则重建二叉树并返回。
**/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }

  setLeftNode(node) {
    this.leftNode = node
  }

  setRightNode(node) {
    this.rightNode = node
  }
}

const getTree = (pre = [], mid = []) => {
  // pre 先序数组
  // mid 中序数组
  let leftPre = [];
  let leftMid = [];
  let rightPre = [];
  let rightMid = [];


  let root = mid.findIndex(item => item === pre[0]);
  let node = null;

  if (root > -1) {
    node = new TreeNode(mid[root]);
    leftMid = mid.slice(0, root);
    leftPre = pre.slice(1, leftMid.length + 1);

    rightMid = mid.slice(leftMid.length + 1);
    rightPre = pre.slice(leftPre.length + 1);

    if (leftMid.length) {
      node.setLeftNode(getTree(leftPre, leftMid));
    }

    if (rightMid.length) {
      node.setRightNode(getTree(rightPre, rightMid))
    }
  }

  return node
}

const pre = [1, 2, 4, 5, 8, 3, 6, 9, 7]
const mid = [4, 2, 8, 5, 1, 6, 9, 3, 7]

const node = getTree(pre, mid);
console.log(node);