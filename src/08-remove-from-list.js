/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let nextNode = l.next;
  let currentNode = l;
  if (currentNode.value === k) {
    currentNode.value = nextNode.value;
    currentNode.next = nextNode.next;
    this.size--;
  }
  while (nextNode) {
    if (nextNode.value === k) break;
    currentNode = nextNode;
    nextNode = nextNode.next;
  }
  if (nextNode) {
    currentNode.next = nextNode.next;
    this.size--;
  }
  return l;
}

module.exports = removeKFromList;
