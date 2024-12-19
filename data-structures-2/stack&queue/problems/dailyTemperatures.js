function dailyTemperatures(temperatures) {
  const stack = [];
  const answer = Array(temperatures.length).fill(0);

  for (let index = 0; index < temperatures.length; index++) {
    const currentTemperature = temperatures[index];

    while (
      stack.length > 0 &&
      currentTemperature > temperatures[stack[stack.length - 1]]
    ) {
      const previousIndex = stack.pop();
      answer[previousIndex] = index - previousIndex;
    }

    stack.push(index);
  }

  return answer;
}
