function maxKElement(nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const freqArray = Array.from(freqMap.entries());
  const kMostFrequent = quickSelect(freqArray, 0, freqArray.length - 1, k);

  return kMostFrequent.map((v) => v[0]);
}

const quickSelect = (arr, left, right, k) => {
  if (left === right) return arr.slice(0, k);

  const pivotIndex = partition(arr, left, right);
  const count = pivotIndex + 1;

  if (count === k) {
    return arr.slice(0, k);
  } else if (k < count) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
};

const partition = (arr, left, right) => {
  const pivot = arr[right][1];
  let storeIndex = left;

  for (let index = storeIndex; index < right; index++) {
    if (arr[index][1] >= pivot) {
      [arr[storeIndex], arr[index]] = [arr[index], arr[storeIndex]];
      storeIndex += 1;
    }
  }

  [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
  return storeIndex;
};

function maxKElement(nums, k) {
  const frequencyMap = {};
  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of Object.entries(frequencyMap)) {
    buckets[count].push(Number(num));
  }

  const result = [];
  for (
    let index = buckets.length - 1;
    index >= 0 && result.length < k;
    index--
  ) {
    if (buckets[index].length > 0) {
      result.push(...buckets[index]);
    }
  }

  return result;
}
