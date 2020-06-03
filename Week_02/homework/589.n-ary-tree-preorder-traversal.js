/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const res = []
    function traversal (root) {
        if (root) res.push(root.val)

        for (let i = 0; i < root.children.length; i++) {
            traversal(root.children[i])
        }
    }
    traversal(root)
    return res
};