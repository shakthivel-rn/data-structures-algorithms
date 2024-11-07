function checkForSubtree(root, subRoot) {
    function dfs(node) {
        if (node === null) return false

        if (checkIfSameTree(node, subRoot)) return true

        return dfs(node.left) || dfs(node.right)
    }

    function checkIfSameTree(node, subNode) {
        if (node === null && subNode === null) return true
        if (node === null || subNode === null) return false
        if (node.val !== subNode.val) return false

        return checkIfSameTree(node.left, subNode.left) && checkIfSameTree(node.right, subNode.right)
    }

    return dfs(root)
}