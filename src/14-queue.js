// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  get size() {
    return this.length;
  }

  enqueue(element) {
    const item = new ListNode(element);
    if (this.head) {
      this.tail.next = item;
      this.tail = item;
    } else {
      this.tail = item;
      this.head = item;
    }
    this.length++;
  }

  dequeue() {
    const dequeueItem = this.head;
    this.head = this.head.next;
    return dequeueItem.value;
  }
}

module.exports = Queue;
