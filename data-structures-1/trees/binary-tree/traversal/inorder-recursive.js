var inorderTraversal = function (root) {
    const output = []

    const helper = (node) => {
        if (node) {
            helper(node.left)
            output.push(node.val)
            helper(node.right)
        }
    }

    helper(root)
    return output
};