function canJump(nums) {
  const UNKNOWN = 0;
  const BAD = 1;
  const GOOD = 2;

  const memo = Array.from({ length: nums.length }, () => UNKNOWN);
  memo[memo.length - 1] = GOOD;

  function canJumpFromPosition(position, nums) {
    if (memo[position] !== UNKNOWN) {
      return memo[position] === GOOD ? true : false;
    }

    const furthestJump = Math.min(position + nums[position], nums.length - 1);
    for (
      let nextPosition = furthestJump;
      nextPosition > position;
      nextPosition--
    ) {
      if (canJumpFromPosition(nextPosition, nums)) {
        memo[position] = GOOD;
        return true;
      }
    }

    memo[position] = BAD;
    return false;
  }

  return canJumpFromPosition(0, nums);
}
