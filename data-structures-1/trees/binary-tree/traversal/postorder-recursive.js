var postorderTraversal = function (root) {
    const output = []

    const helper = (node) => {
        if (node) {
            helper(node.left)
            helper(node.right)
            output.push(node.val)
        }
    }

    helper(root)
    return output
};