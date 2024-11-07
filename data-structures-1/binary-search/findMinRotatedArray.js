function findMinRotatedArray(nums) {
    let left = 0, right = nums.length - 1
    const firstValue = nums[left]

    if (nums[right] > firstValue) return firstValue

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        const item = nums[mid]

        if (item >= firstValue) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return nums[right]
}