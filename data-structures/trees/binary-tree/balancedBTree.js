function isBalanced(root) {
    function helper(node) {
        if (node === null) return [true, 0]

        const leftTree = helper(node.left)
        const rightTree = helper(node.right)

        const isSubTreeBalanced = leftTree[0] && rightTree[0]
        const currentTreeBalanced = Math.abs(leftTree[1] - rightTree[1]) <= 1

        const isTreeBalanced = isSubTreeBalanced && currentTreeBalanced
        const currentDepth = Math.max(leftTree[1], rightTree[1]) + 1

        return [isTreeBalanced, currentDepth]
    }

    return helper(root)[0]
}