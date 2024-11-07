class CardsInGroups {
  isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
      return false;
    }

    const count = {};
    for (const n of hand) {
      count[n] ??= 0;
      count[n] += 1;
    }

    const minHeap = new MinPriorityQueue();
    for (const key in count) {
      minHeap.enqueue(Number(key));
    }

    while (!minHeap.isEmpty()) {
      const first = minHeap.front();

      for (let i = first; i < first + groupSize; i++) {
        if (!(i in count) || count[i] === 0) return false;
        count[i] -= 1;

        if (count[i] === 0) {
          if (i !== minHeap.front()) return false;
          minHeap.dequeue();
        }
      }
    }

    return true;
  }
}
