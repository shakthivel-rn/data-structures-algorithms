function listReorder(head) {
    if (!head || !head.next) return head

    let slow = head, fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null, current = slow
    while (current) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }

    let first = head, second = prev
    while (second.next) {
        const nextFirst = first.next, nextSecond = second.next
        first.next = second
        second.next = nextFirst

        first = nextFirst
        second = nextSecond
    }
}