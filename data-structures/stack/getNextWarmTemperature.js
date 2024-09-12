function getNextWarmTemperature(temperatures) {
    const indexStack = []
    const result = Array.from({ length: temperatures.length }, () => 0)

    for (let index = 0; index < temperatures.length; index++) {
        while (indexStack.length > 0 && temperatures[index] > temperatures[indexStack.at(-1)]) {
            const prevIndex = indexStack.pop()
            result[prevIndex] = index - prevIndex
        }
        indexStack.push(index)
    }

    return result
}