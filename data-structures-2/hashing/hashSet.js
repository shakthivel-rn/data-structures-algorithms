// Array
var MyHashSet = function () {
  this.size = 1000;
  this.buckets = Array.from({ length: this.size }, () => []);
};

MyHashSet.prototype.add = function (key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];

  if (!bucket.includes(key)) {
    bucket.push(key);
  }
};

MyHashSet.prototype.remove = function (key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];

  const keyIndex = bucket.indexOf(key);
  if (keyIndex !== -1) {
    bucket.splice(keyIndex, 1);
  }
};

MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];

  return bucket.includes(key);
};

MyHashSet.prototype.hash = function (key) {
  return key % this.size;
};

// Linked List
var MyHashSet = function () {
  this.size = 1000;
  this.buckets = Array.from({ length: this.size }, () => new Bucket());
};

MyHashSet.prototype.add = function (key) {
  const index = this.hash(key);
  this.buckets[index].insert(key);
};

MyHashSet.prototype.remove = function (key) {
  const index = this.hash(key);
  this.buckets[index].delete(key);
};

MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key);
  return this.buckets[index].exists(key);
};

MyHashSet.prototype.hash = function (key) {
  return key % this.size;
};

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.next = nextNode;
  }
}

class Bucket {
  constructor() {
    this.head = new Node();
  }

  insert(value) {
    if (!this.exists(value)) {
      const newNode = new Node(value, this.head.next);
      this.head.next = newNode;
    }
  }

  delete(value) {
    let prev = this.head,
      curr = this.head.next;

    while (curr) {
      if (curr.value === value) {
        prev.next = curr.next;
        return;
      }

      prev = prev.next;
      curr = curr.next;
    }
  }

  exists(value) {
    let curr = this.head.next;

    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }

    return false;
  }
}
