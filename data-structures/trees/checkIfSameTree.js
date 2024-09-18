function checkIfSameTree(p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false

    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
}

function checkIfSameTree(p, q) {
    const queue = [[p, q]]

    while (queue.length) {
        const [p, q] = queue.shift()

        if (!checkSame(p, q)) return false

        if (p) {
            queue.push([p.left, q.left])
            queue.push([p.right, q.right])
        }
    }

    return true
}

function checkSame(p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false

    return true
}