function detectCycleInLinkedList(head) {
    const seen = new Map()
    let currentNode = head

    while (currentNode) {
        if (seen.has(currentNode)) return true

        seen.set(currentNode, true)
        currentNode = currentNode.next
    }

    return false
}

function hasCycle(head) {
    let slow = head, fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }

    return false
}