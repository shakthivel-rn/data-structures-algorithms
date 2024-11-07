function targetTwoSum(numbers, target) {
    let start = 0, end = numbers.length - 1

    while (start < end) {
        const currentSum = numbers[start] + numbers[end]

        if (currentSum === target) return [start + 1, end + 1]
        else if (currentSum < target) start += 1
        else end -= 1
    }

    return [-1, -1]
}