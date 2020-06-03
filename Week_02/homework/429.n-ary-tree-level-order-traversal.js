/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if (!root) return []
    const res = []
    target = [root]
    while (target.length > 0) {
        const now = []
        const nextTarget = []
        for(let i = 0; i < target.length; i++) {
            // if (arr[i].val)
            now.push(target[i].val)
            nextTarget.push(...target[i].children)
        }
        res.push(now)
        target = nextTarget
    }

    return res
};