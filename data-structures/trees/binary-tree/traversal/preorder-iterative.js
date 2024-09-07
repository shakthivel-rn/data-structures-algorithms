var preorderTraversal = function (root) {
    if (!root) return []

    const stack = [root]
    const output = []

    while (stack.length) {
        const node = stack.pop()

        if (node) {
            output.push(node.val)

            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }
    }

    return output
};
