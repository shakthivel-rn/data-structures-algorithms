function checkValidString(s) {
  let leftMin = 0,
    leftMax = 0;

  for (const c of s) {
    if (c === "(") {
      leftMin += 1;
      leftMax += 1;
    } else if (c === ")") {
      leftMin -= 1;
      leftMax -= 1;
    } else {
      leftMin -= 1;
      leftMax += 1;
    }

    if (leftMax < 0) return false;

    if (leftMin < 0) leftMin = 0;
  }

  return leftMin === 0;
}
