var countUnivalSubtrees = function (root) {
    let count = 0

    function isUnivalSubtree(node) {
        if (node === null) return true

        const leftIsUnival = isUnivalSubtree(node.left)
        const rightIsUnival = isUnivalSubtree(node.right)

        if (!leftIsUnival || !rightIsUnival) return false

        if (node.left && node.left.val !== node.val) return false
        if (node.right && node.right.val !== node.val) return false

        count += 1
        return true
    }

    isUnivalSubtree(root)
    return count
};