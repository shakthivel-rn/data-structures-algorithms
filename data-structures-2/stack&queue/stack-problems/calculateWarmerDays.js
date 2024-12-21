function calculateWarmerDays(temperatures) {
  const unresolvedIndices = [];
  const daysToWait = Array(temperatures.length).fill(0);

  for (let currentDay = 0; currentDay < temperatures.length; currentDay++) {
    const currentTemp = temperatures[currentDay];

    while (
      unresolvedIndices.length > 0 &&
      currentTemp >
        temperatures[unresolvedIndices[unresolvedIndices.length - 1]]
    ) {
      const previousDay = unresolvedIndices.pop();
      daysToWait[previousDay] = currentDay - previousDay;
    }

    unresolvedIndices.push(currentDay);
  }

  return daysToWait;
}
