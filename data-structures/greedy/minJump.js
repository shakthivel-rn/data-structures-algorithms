class MinJump {
  jump(nums) {
    let jumps = 0,
      jumpEnd = 0,
      farthest = 0;

    for (let index = 0; index < nums.length - 1; index++) {
      farthest = Math.max(farthest, index + nums[index]);

      if (index === jumpEnd) {
        jumps += 1;
        jumpEnd = farthest;
      }
    }

    return jumps;
  }
}
