function removeNthNode(head, n) {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  let node = dummyHead;
  for (let i = 0; i <= n; i++) {
    node = node.next;
  }

  let prev = dummyHead;
  while (node) {
    prev = prev.next;
    node = node.next;
  }

  prev.next = prev.next.next;

  return dummyHead.next;
}
