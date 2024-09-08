var hasPathSum = function (root, targetSum) {
    if (!root) return false
    targetSum -= root.val

    if (!root.left && !root.right) return targetSum === 0

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};

var hasPathSum = function (root, targetSum) {
    if (!root) return false

    const nodeStack = [root]
    const sumStack = [(targetSum - root.val)]

    while (nodeStack.length > 0) {
        const currentNode = nodeStack.pop()
        const currentSum = sumStack.pop()

        if (!currentNode.left && !currentNode.right && currentSum === 0) {
            return true
        }

        if (currentNode.right) {
            nodeStack.push(currentNode.right)
            sumStack.push(currentSum - currentNode.right.val)
        }

        if (currentNode.left) {
            nodeStack.push(currentNode.left)
            sumStack.push(currentSum - currentNode.left.val)
        }
    }

    return false

};