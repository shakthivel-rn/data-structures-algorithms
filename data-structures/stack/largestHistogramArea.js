function largestHistogramArea(heights) {
    let maximumArea = 0
    const stack = []
    const N = heights.length

    for (let index = 0; index < N; index++) {
        let start = index

        while (stack.length > 0 && heights[index] < stack.at(-1)[1]) {
            const [lastIndex, height] = stack.pop()
            maximumArea = Math.max(maximumArea, height * (index - lastIndex))
            start = lastIndex
        }

        stack.push([start, heights[index]])
    }

    for (const [index, height] of stack) {
        maximumArea = Math.max(maximumArea, height * (N - index))
    }

    return maximumArea
}