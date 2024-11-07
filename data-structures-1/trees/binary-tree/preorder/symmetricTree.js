var isSymmetric = function (root) {
    return isMirror(root, root)
};

const isMirror = (node1, node2) => {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false

    return (
        node1.val === node2.val &&
        isMirror(node1.right, node2.left) &&
        isMirror(node1.left, node2.right)
    )
}