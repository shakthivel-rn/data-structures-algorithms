class LinkedListWithRandomPointerRecursive {
    constructor() {
        this.visited = new Map()
    }

    cloneLinkedListWithRandomPointer(head) {
        if (head === null) return null

        if (this.visited.has(head)) return this.visited.get(head)

        const newNode = new Node(head.val, null, null)
        this.visited.set(head, newNode)

        newNode.next = this.copyRandomList(head.next)
        newNode.random = this.copyRandomList(head.random)

        return newNode
    }
}

function linkedListWithRandomPointerIterative(head) {
    if (head === null) return head


    let currNode = head
    while (currNode) {
        const newNode = new Node(currNode.val, null, null)
        newNode.next = currNode.next
        currNode.next = newNode
        currNode = newNode.next
    }

    currNode = head
    while (currNode) {
        currNode.next.random = currNode.random ? currNode.random.next : null
        currNode = currNode.next.next
    }

    let oldNode = head
    let newNode = head.next
    const newHead = head.next
    while (oldNode) {
        oldNode.next = oldNode.next.next
        newNode.next = newNode.next ? newNode.next.next : null

        oldNode = oldNode.next
        newNode = newNode.next
    }

    return newHead
}