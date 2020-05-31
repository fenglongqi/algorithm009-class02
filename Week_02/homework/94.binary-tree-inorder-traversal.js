var inorderTraversal = function (root) {
    if (!root) return [];
    let ans = [];
    function traversal(root) {
      if (!root) return;
      traversal(root.left);
      ans.push(root.val);
      traversal(root.right);
    }
    traversal(root);
    return ans;
  };