/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return []
    const res = []
    function traversal (root) {
        if (root) {
            
            res.push(root.val)
            traversal(root.left)
            traversal(root.right)
        }
    }

    traversal(root)
    return res
};