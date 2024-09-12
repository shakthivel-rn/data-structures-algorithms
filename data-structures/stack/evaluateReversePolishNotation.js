function evaluateReversePolishNotation(tokens) {
    const stack = []

    for (const token of tokens) {
        if (token === "+") {
            stack.push(stack.pop() + stack.pop())
        } else if (token === "-") {
            const secondValue = stack.pop()
            const firstValue = stack.pop()

            stack.push(firstValue - secondValue)
        } else if (token === "*") {
            stack.push(stack.pop() * stack.pop())
        } else if (token === "/") {
            const secondValue = stack.pop()
            const firstValue = stack.pop()

            stack.push(Math.trunc(firstValue / secondValue))
        } else {
            stack.push(parseInt(token))
        }
    }

    return stack.pop()
}