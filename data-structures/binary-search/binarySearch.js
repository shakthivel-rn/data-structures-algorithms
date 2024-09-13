function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}