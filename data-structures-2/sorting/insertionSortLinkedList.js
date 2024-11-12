function insertionSortLinkedList(head) {
  let dummy = new ListNode();
  let curr = head;

  while (curr) {
    let prev = dummy;

    while (prev.next && prev.next.val <= curr.val) {
      prev = prev.next;
    }

    let next = curr.next;
    curr.next = prev.next;
    prev.next = curr;

    curr = next;
  }

  return dummy.next;
}
