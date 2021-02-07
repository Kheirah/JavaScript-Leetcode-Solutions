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
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    const nodesViewedFromRight = [root.val];
    let maxDepth = 0;
    findNodes(root, 0);
    return nodesViewedFromRight;
    
    function findNodes(node, depth) {
        if (!node) {
            return;
        }
        if (depth > maxDepth) {
            nodesViewedFromRight.push(node.val);
            maxDepth = Math.max(maxDepth, depth);
        }
        
        findNodes(node.right, depth+1);
        findNodes(node.left, depth+1);
    }
};
