class DLNode {
    constructor(key = null, value = null) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LeastRecentlyUsedCache {
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()

        this.head = new DLNode()
        this.tail = new DLNode()
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    addNode(node) {
        const oldFirstNode = this.head.next

        this.head.next = node
        node.prev = this.head

        node.next = oldFirstNode
        oldFirstNode.prev = node
    }

    removeNode(node) {
        const prevNode = node.prev
        const nextNode = node.next

        prevNode.next = nextNode
        nextNode.prev = prevNode
    }

    get(key) {
        if (!this.map.has(key)) return -1

        const node = this.map.get(key)
        this.removeNode(node)
        this.addNode(node)

        return node.value
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.removeNode(node)
            node.value = value
            this.addNode(node)
        } else {
            if (this.map.size === this.capacity) {
                const leastUsedNode = this.tail.prev
                this.map.delete(leastUsedNode.key)
                this.removeNode(leastUsedNode)
            }

            const newNode = new DLNode(key, value)
            this.map.set(key, newNode)
            this.addNode(newNode)
        }
    }
}
