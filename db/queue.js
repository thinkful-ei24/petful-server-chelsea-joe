class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
  const newNode = new _Node(data, null);

    if(!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
  }

  dequeue() {
    const firstNode = this.first;
    if(!this.first) {
      return new Error("I don't know man");
    } else {
      this.first = this.first.next;
      firstNode.next = null;
      return firstNode.value;
    }
  }

  peek() {
    if(!this.first) {
      return new Error("I don't know man");
    } else {
      return this.first.value;
    }
  }
}

module.exports = Queue;