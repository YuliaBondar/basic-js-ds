const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  }

 
  getUnderlyingList() {
    return this._first;
  }

  
  enqueue(value) {
    const newNode = new QueueNode(value);

    if (this._first === null) {
      this._first = newNode;
      this._last = newNode;
    } else {
      this._last.next = newNode;
      this._last = newNode;
    }
  }

  dequeue() {
    if (this._first === null) {
      return null;
    }

    const value = this._first.value;
    this._first = this._first.next;

    if (this._first === null) {
      this._last = null;
    }

    return value;
  }
}

module.exports = {
  Queue
};
