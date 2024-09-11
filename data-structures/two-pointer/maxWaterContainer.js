function maxArea(heights) {
    let left = 0, right = heights.length - 1
    let maxArea = 0

    while (left < right) {
        const height = Math.min(heights[left], heights[right])
        const width = right - left
        const currentArea = height * width
        maxArea = Math.max(maxArea, currentArea)

        if (heights[left] < heights[right]) {
            left += 1
        } else {
            right -= 1
        }
    }

    return maxArea
}