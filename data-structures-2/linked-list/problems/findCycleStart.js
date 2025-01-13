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

function findCycleStart(head) {
  if (head === null) return head;

  const intersect = getIntersect(head);

  if (intersect === null) return null;

  let pointerA = head,
    pointerB = intersect;

  while (pointerA !== pointerB) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }

  return pointerA;
}

function getIntersect(node) {
  let slow = node,
    fast = node;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return slow;
    }
  }

  return null;
}
