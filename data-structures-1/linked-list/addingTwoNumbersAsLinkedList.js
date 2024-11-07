function addingTwoNumbersAsLinkedList(l1, l2) {
    let newHead = new ListNode()
    let currentNode = newHead
    let carry = 0

    while (l1 || l2) {
        const firstNum = l1 ? l1.val : 0
        const secondNum = l2 ? l2.val : 0

        const sum = firstNum + secondNum + carry
        const val = sum % 10
        carry = Math.floor(sum / 10)

        const newNode = new ListNode(val)
        currentNode.next = newNode
        currentNode = currentNode.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry) currentNode.next = new ListNode(carry)
    return newHead.next
}