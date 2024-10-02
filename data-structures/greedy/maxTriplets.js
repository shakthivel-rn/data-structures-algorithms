function maxTriplets(triplets, target) {
  const validTriplets = triplets.filter((triplet) =>
    triplet.every((value, index) => value <= target[index])
  );
  const maxTriplet = validTriplets.reduce(
    (acc, triplet) => {
      return triplet.map((value, index) => Math.max(value, acc[index]));
    },
    [0, 0, 0]
  );

  return maxTriplet.every((value, index) => value === target[index]);
}
