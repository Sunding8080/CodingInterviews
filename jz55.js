/**
 * 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度，根节点的深度视为 1 。
 */

/**
 * 解法1
 * (1)求TreeDepth(TreeNode* pRoot)-&gt;int
 * (2)先求 TreeDepth(pRoot-&gt;left) -&gt;lval
 * (3)再求TreeDepth(pRoot-&gt;right) -&gt;rval
 * (4)return max(lval, rval) + 1
 */

function treeDeepth(node) {
  return node
    ? Math.max(treeDeepth(node.left) + 1, treeDeepth(node.right) + 1)
    : 0
}
