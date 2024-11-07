function invertBTree(root) {
    if (root === null) return null

    const temp = root.left
    root.left = root.right
    root.right = temp

    if (root.left) invertTree(root.left)
    if (root.right) invertTree(root.right)

    return root
}

function invertTree(root) {
    if (root === null) return null

    const leftNode = invertTree(root.left)
    const rightNode = invertTree(root.right)

    root.right = leftNode
    root.left = rightNode

    return root
}

function invertTree(root) {
    if (root === null) return null

    const queue = [root]
    while (queue.length) {
        const currentNode = queue.shift()

        const tempNode = currentNode.left
        currentNode.left = currentNode.right
        currentNode.right = tempNode

        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }

    return root
}