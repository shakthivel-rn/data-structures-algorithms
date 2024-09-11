function maxRainWaterTrapped(height) {
    let left = 0, right = height.length - 1
    let ans = 0
    let leftMax = 0, rightMax = 0

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(height[left], leftMax)
            ans += leftMax - height[left]
            left += 1
        } else {
            rightMax = Math.max(height[right], rightMax)
            ans += rightMax - height[right]
            right -= 1
        }
    }

    return ans
}