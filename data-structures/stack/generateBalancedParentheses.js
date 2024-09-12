function generateBalancedParentheses(n) {
    const combinations = []

    const backtrack = (combination, open, close) => {
        if (combination.length === 2 * n) {
            combinations.push(combination)
            return
        }

        if (open < n) backtrack(combination + '(', open + 1, close)
        if (close < open) backtrack(combination + ')', open, close + 1)
    }

    backtrack('', 0, 0)
    return combinations
}