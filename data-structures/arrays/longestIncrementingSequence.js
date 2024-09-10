// 1 - Sorting - Time Complexity O(nlogn)
function longestIncrementingSequence(nums) {
    if (nums.length === 0) return 0

    nums.sort((a, b) => a - b)
    let currentLength = 1
    let maxLength = 1

    for (let index = 1; index < nums.length; index++) {
        if (nums[index] !== nums[index - 1]) {
            if (nums[index] === nums[index - 1] + 1) {
                currentLength += 1
            } else {
                maxLength = Math.max(maxLength, currentLength)
                currentLength = 1
            }
        }
    }

    return Math.max(maxLength, currentLength)
}

// 2 - HashSet - Time Complexity O(n)
function longestIncrementingSequence(nums) {
    const numSet = new Set(nums)
    let longest = 0

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1
            while (numSet.has(num + length)) {
                length += 1
            }
            longest = Math.max(length, longest)
        }
    }

    return longest
}