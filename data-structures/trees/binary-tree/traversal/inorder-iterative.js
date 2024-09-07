var inorderTraversal = function (root) {
    if (!root) return []

    const stack = []
    const output = []
    let node = root

    while (node || stack.length) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()
        output.push(node.val)
        node = node.right
    }

    return output
};