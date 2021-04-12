/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

const ListNode = require('../extensions/list-node');

class Stack {
  push(element) {
    const item = new ListNode(element);
    if (this.head) {
      item.next = this.head;
      this.head = item;
    } else this.head = item;
  }

  pop() {
    const popItem = this.head;
    this.head = this.head.next;
    return popItem.value;
  }

  peek() {
    const peekItem = this.head;
    return peekItem.value;
  }
}

module.exports = Stack;
