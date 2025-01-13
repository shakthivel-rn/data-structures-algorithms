class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  addAtHead(val) {
    const newNode = new Node(val, this.head);
    this.head = newNode;
    this.length++;
  }

  addAtTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const newNode = new Node(val, current.next);
    current.next = newNode;
    this.length++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }

    this.length--;
  }
}
