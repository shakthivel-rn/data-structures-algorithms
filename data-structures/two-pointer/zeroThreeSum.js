// Using Two Pointer - Time Complexity O(nlogn)
function zeroThreeSum(nums) {
    nums.sort((a, b) => a - b)
    const triplets = []

    for (let index = 0; index < nums.length; index++) {
        if (index > 0 && nums[index] === nums[index - 1]) continue
        const firstValue = nums[index]

        let start = index + 1, end = nums.length - 1
        while (start < end) {
            const currentSum = firstValue + nums[start] + nums[end]

            if (currentSum === 0) {
                triplets.push([firstValue, nums[start], nums[end]])
                start += 1
                end -= 1

                while (start < end && nums[start] === nums[start - 1]) start += 1
                while (start < end && nums[end] === nums[end + 1]) end -= 1
            } else if (currentSum < 0) {
                start += 1
            } else {
                end -= 1
            }
        }
    }

    return triplets
}

// Using Hash Set - Time Complexity O(n)
function zeroThreeSum(nums) {
    nums.sort((a, b) => a - b)
    const triplets = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        const seen = new Set()

        for (let j = i + 1; j < nums.length; j++) {
            const complement = -nums[i] - nums[j]

            if (seen.has(complement)) {
                triplets.push([nums[i], nums[j], complement])
                while (j < nums.length && nums[j] === nums[j + 1]) j += 1
            } else {
                seen.add(nums[j])
            }
        }
    }

    return triplets
}