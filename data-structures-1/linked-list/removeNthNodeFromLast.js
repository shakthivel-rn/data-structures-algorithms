function removeNthNodeFromLast(head, n) {
    const dummy = new ListNode()
    dummy.next = head
    let secondNode = dummy
    let firstNode = dummy

    for (let index = 0; index <= n; index++) {
        secondNode = secondNode.next
    }

    while (secondNode) {
        firstNode = firstNode.next
        secondNode = secondNode.next
    }

    firstNode.next = firstNode.next ? firstNode.next.next : null
    return dummy.next
}