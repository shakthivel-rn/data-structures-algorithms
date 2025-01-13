function removeAllValue(head, val) {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let prev = dummyHead,
    curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return dummyHead.next;
}
