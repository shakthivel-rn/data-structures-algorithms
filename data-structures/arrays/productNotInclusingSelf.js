function productNotIncludingSelf(nums) {
    const numsLength = nums.length
    const left = Array.from({ length: numsLength }, () => 1)
    const right = Array.from({ length: numsLength }, () => 1)
    const product = Array.from({ length: numsLength }, () => 1)

    for (let index = 1; index < numsLength; index++) {
        left[index] = left[index - 1] * nums[index - 1]
    }
    for (let index = numsLength - 2; index >= 0; index--) {
        right[index] = right[index + 1] * nums[index + 1]
    }

    for (let index = 0; index < numsLength; index++) {
        product[index] = left[index] * right[index]
    }

    return product
}

function productNotIncludingSelf(nums) {
    const numsLength = nums.length
    const product = Array.from({ length: numsLength }, () => 1)

    for (let index = 1; index < numsLength; index++) {
        product[index] = product[index - 1] * nums[index - 1]
    }

    let right = 1
    for (let index = numsLength - 1; index >= 0; index--) {
        product[index] *= right
        right *= nums[index]
    }

    return product
}