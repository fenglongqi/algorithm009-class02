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
var inorderTraversal = function(root) {
    if (!root) return []
    const res = []
    function traversal (root) {
        if (root) {
        traversal(root.left)
        res.push(root.val)
        traversal(root.right)
        }
    }

    traversal(root)

    return res
};
