function findCycleStart(head) {
  const seen = new Set();
  let node = head;

  while (node) {
    if (seen.has(node)) {
      return node;
    }

    seen.add(node);
    node = node.next;
  }

  return null;
}
