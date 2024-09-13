function findTargetInMatrix(matrix, target) {
    const ROWS = matrix.length, COLS = matrix[0].length
    if (target < matrix[0][0] || target > matrix[ROWS - 1][COLS - 1]) return false

    let targetRow = 0
    while (targetRow < ROWS) {
        if (target <= matrix[targetRow].at(-1)) break
        targetRow += 1
    }

    let left = 0, right = COLS - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const item = matrix[targetRow][mid]

        if (target === item) return true
        else if (target < item) right = mid - 1
        else left = mid + 1
    }

    return false
}