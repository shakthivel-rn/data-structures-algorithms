var maxDepth = function (root) {
    if (!root) return 0

    let maxDepth = 0

    const helper = (node, depth = 1) => {
        if (!node) return

        maxDepth = Math.max(maxDepth, depth)

        helper(node.left, depth + 1)
        helper(node.right, depth + 1)
    }

    helper(root)
    return maxDepth
};