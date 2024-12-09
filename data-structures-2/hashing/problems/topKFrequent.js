// O(nlogn)
function getTopKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const sortedElements = [...frequencyMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  return sortedElements.slice(0, k);
}

// O(n)
function getTopKFrequent(nums, k) {
  const freqMap = {};

  for (const num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of Object.entries(freqMap)) {
    buckets[freq].push(Number(num));
  }

  const topK = [];
  for (let i = buckets.length - 1; i >= 0 && topK.length < k; i--) {
    if (buckets[i].length > 0) {
      topK.push(...buckets[i]);
    }
  }

  return topK;
}
