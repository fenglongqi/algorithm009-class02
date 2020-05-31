var preorder = function(root) {
    if (!root) return [];

    var res = [];
    traversal(root);
    return res;

    function traversal(root){
        if (!root) return;

        res.push(root.val);
        for (var i = 0; i < root.children.length; i++){
            traversal(root.children[i]);
        }
    }
};