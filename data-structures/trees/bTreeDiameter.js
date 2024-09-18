class BTreeDiameter {
    constructor() {
        this.maxDiameter = 0
    }

    bTreeDiameter(root) {
        this.bTreeDiameterHelper(root)
        return this.maxDiameter
    }

    bTreeDiameterHelper(root) {
        if (root === null) return 0

        const leftDepth = this.bTreeDiameterHelper(root.left)
        const rightDepth = this.bTreeDiameterHelper(root.right)

        this.maxDiameter = Math.max(this.maxDiameter, leftDepth + rightDepth)

        return Math.max(leftDepth, rightDepth) + 1
    }
}