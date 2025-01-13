function checkCycle(head) {
  const seen = new Set();
  let node = head;

  while (node) {
    if (seen.has(node)) {
      return true;
    }

    seen.add(node);
    node = node.next;
  }

  return false;
}

function checkCycle(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
