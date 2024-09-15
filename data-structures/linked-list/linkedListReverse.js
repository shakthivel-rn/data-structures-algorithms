function reverseListRecursive(head) {
    if (head === null || head.next === null) return head

    const newHead = this.reverseList(head.next)
    head.next.next = head
    head.next = null
    
    return newHead
}

function linkedListReverseIterative(head) {
    let currentNode = head, prevNode = null

    while (currentNode) {
        const nextNode = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
    }

    return prevNode
}