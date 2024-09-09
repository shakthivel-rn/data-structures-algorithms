function kFrequent(nums, k) {
    const count = {}
    const freq = Array.from({ length: nums.length + 1 }, () => [])

    for (const num of nums) {
        count[num] ??= 0
        count[num] += 1
    }
    for (const num in count) {
        freq[count[num]].push(parseInt(num))
    }

    const result = []
    for (let index = freq.length - 1; index > 0; index--) {
        for (const num of freq[index]) {
            result.push(num)

            if (result.length === k) {
                return result
            }
        }
    }
}