function reverseLinkedList(head) {
  let prevNode = null,
    currNode = head;

  while (currNode) {
    const nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
}
