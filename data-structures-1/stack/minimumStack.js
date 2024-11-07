class MinimumStack {
    constructor() {
        this.mainStack = []
        this.minStack = []
    }

    push(val) {
        this.mainStack.push(val)

        if (this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            const currentMin = this.minStack.at(-1)
            const newMin = Math.min(currentMin, val)
            this.minStack.push(newMin)
        }
    }

    pop() {
        this.mainStack.pop()
        this.minStack.pop()
    }

    top() {
        return this.mainStack.at(-1)
    }

    getMin() {
        return this.minStack.at(-1)
    }
}
