function checkIndexOfTwoSum(nums, target) {
    const indexMap = {}

    for (let index = 0; index < nums.length; index++) {
        if ((target - nums[index]) in indexMap) {
            return [index, indexMap[target - nums[index]]]
        }

        indexMap[nums[index]] = index
    }

    return [-1, -1]
}