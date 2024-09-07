var preorderTraversal = function (root) {
    const preOrder = []

    const helper = (node) => {
        if (node) {
            preOrder.push(node.val)
            helper(node.left)
            helper(node.right)
        }
    }

    helper(root)
    return preOrder
};