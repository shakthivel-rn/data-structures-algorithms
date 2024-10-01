class GasStation {
  canCompleteCircuit(gas, cost) {
    if (
      gas.reduce((acc, val) => acc + val, 0) <
      cost.reduce((acc, val) => acc + val, 0)
    ) {
      return -1;
    }

    let total = 0;
    let res = 0;

    for (let index = 0; index < gas.length; index++) {
      total += gas[index] - cost[index];

      if (total < 0) {
        total = 0;
        res = index + 1;
      }
    }

    return res;
  }
}
