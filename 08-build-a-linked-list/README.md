# Build And Traverse A Linked List

A linked list is a data structure that, similar to an array, holds a list of items in sequence. Unlike an array, a linked list is non-contiguous in memory. Each item in the linked list points to the next item in the linked list and begins with a `head` so for example:

```
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
}

const myLinkedList = new LinkedList
LinkedList.head = new ListNode("I am the head")
LinkedList.head.next = new ListNode("I am second in the list")
LinkedList.head.next.next = new ListNode("Hey! I'm third in the list!")
LinkedList.head.next.next.next = new ListNode("I guess I'm last!")
```

More about linked lists:
https://www.geeksforgeeks.org/data-structures/linked-list/
https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

Build and test out a linked list in repl and discuss how it works.

## Get nth Node In The List

Write an instance method for a linked list that takes in an integer `n` and returns the `nth` node in the linked list. Like an array, the head is considered node `0`.

If the nth node doesn't exist, return `nil` or `null`.

```
myLinkedList.nthNode(0) --> { data: "I am the head", next: {...} }
myLinkedList.nthNode(2) --> { data: "Hey! I'm third in the list!", next: {...} }
myLinkedList.nthNode(100000) --> null
```

## Get Last Node In List

Write a method for a linked list that returns the last node in the linked list. If the linked list has no nodes, it instead returns `nil` or `null`.

```
myLinkedList.last() --> { data: "I guess I'm last!", next: null }
```

## Append To List

Write a method that, given a linked list and a data value, appends that value as a new node on the linked list. You can add it as an instance method for the linked list class.

```
myLinkedList.appendNode("I am an appended node!")
myLinkedList.last() --> { data: "I am an appended node!", next: null }
```
