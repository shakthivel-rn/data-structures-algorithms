function validateParanthesis(s) {
    const stack = []

    for (const char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char)
        } else {
            const top = stack.pop() ?? "#"
            if (top !== bracketMap[char]) {
                return false
            }
        }
    }

    return !stack.length
}

const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "["
}