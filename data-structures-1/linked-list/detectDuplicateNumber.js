function detectDuplicateNumber(nums) {
    nums.sort((a, b) => a - b)

    for (let index = 1; index < nums.length; index++) {
        if (nums[index] === nums[index - 1]) return nums[index]
    }
}

function detectDuplicateNumber(nums) {
    const seen = new Set()

    for (const num of nums) {
        if (seen.has(num)) return num
        seen.add(num)
    }
}

function detectDuplicateNumber(nums) {
    let slow = nums[0], fast = nums[0]

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]

        if (slow === fast) break
    }

    slow = nums[0]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return fast
}