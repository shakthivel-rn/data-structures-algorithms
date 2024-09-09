function hasDuplicate(nums) {
    const seen = new Set()

    for (const num of nums) {
        if (seen.has(num)) return true
        seen.add(num)
    }

    return false
}

function hasDuplicate(nums) {
    if (nums.length < 1) return false

    nums.sort((a, b) => a - b)
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] === nums[index - 1]) return true
    }

    return false
}