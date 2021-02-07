/**
* Definition for a binary tree node.
*/
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = root => {
  const result = [];
  const deep = (node, level) => {
    if (!node) return null;

    result[level] = node.val;
    deep(node.left, level + 1);
    deep(node.right, level + 1);

  }
  deep(root, 0);
  return result;
};
