
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    nthNode = n => {
      let node = this.head
      while (n > 0 && node != null) {
        node = node.next
        n -= 1
      }
      if (node == null) {
        return null
      }
      return node.data
    }
    last = () => {
      let node = this.head
      while (node.next) {
        node = node.next
      }
      return node
    }
    appendNode = node => {
      return this.last().next = node
    }
}
