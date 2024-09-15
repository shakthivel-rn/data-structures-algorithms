class LinkedListWithRandomPointer {
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