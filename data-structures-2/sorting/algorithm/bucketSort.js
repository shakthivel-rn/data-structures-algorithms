function bucketSort(arr, k) {
  const buckets = Array.from({ length: k }, () => []);

  const shift = Math.min(...arr);
  const maxValue = Math.max(...arr) - shift;
  const bucketSize = Math.max(1, maxValue / k);

  for (const elem of arr) {
    const index = Math.floor((elem - shift) / bucketSize);

    if (index === k) {
      buckets[k - 1].push(elem);
    } else {
      buckets[index].push(elem);
    }
  }

  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  const sortedArray = [];
  for (const bucket of buckets) {
    sortedArray.push(...bucket);
  }

  return sortedArray;
}

const arr = [4, 2, 7, 10, 3];
console.log(bucketSort(arr, 5));
