var postorderTraversal = function (root) {
    if (root === null) return []

    const stack = [], output = []
    let lastVisited = null

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        const peekNode = stack.at(-1)
        if (peekNode.right && lastVisited !== peekNode.right) {
            root = peekNode.right
        } else {
            lastVisited = stack.pop()
            output.push(lastVisited.val)
        }
    }

    return output
};