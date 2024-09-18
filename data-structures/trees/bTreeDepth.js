function bTreeDepth(root) {
    if (root === null) return 0

    const leftDepth = bTreeDepth(root.left)
    const rightDepth = bTreeDepth(root.right)

    return Math.max(leftDepth, rightDepth) + 1
}

function bTreeDepth(root) {
    const stack = [[root, 1]]
    let res = 0

    while (stack.length) {
        const current = stack.pop()
        const node = current[0], depth = current[1]

        if (node !== null) {
            res = Math.max(res, depth)
            stack.push([node.left, depth + 1])
            stack.push([node.right, depth + 1])
        }
    }

    return res
}

function bTreeDepth(root) {
    if (root === null) return 0

    const queue = [root]
    let level = 0

    while (queue.length) {
        const size = queue.length

        for (let index = 0; index < size; index++) {
            const node = queue.shift()

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        level += 1
    }

    return level
}