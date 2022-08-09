class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
    }
    //  TUESDAY -------------------------------------------------------------------//
    /**
     * Prints all the nodes in the list to the console.
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
    printValues() {
        // if the list it is empty
        if (this.head === null) {
            // console.log("LIST IS EMPTY")
            return this
        }
        // if the list is not empty
        var runner = this.head
        // check to see if runner.next is not equal to null, 
        // but have the runner stop at the last node because .next will point to null
        while (runner.next != null) {
            console.log(runner.value)
            // to move the runner
            runner = runner.next
        }
        // outside of the while loop to print the last node on the linked list
        console.log(runner.value)
    }

    contains(target) {
        // check to see if the list empty
        if (this.head === null) {
            // console.log("LIST IS EMPTY")
            return this
        }
        // create a runner variable and assign it to this.head
        var runner = this.head
        // check while runner is not equals to null, but have the runner run out of bounds of the linked list
        while (runner != null) {
            // if target equals to runner.value return true
            if (target === runner.value) {
                return true
            }
            // otherwise move the runner
            else {
                runner = runner.next
            }
        }
        return false
    }

    insertAtFront(node) {
        const newNode = new SLNode(node)
        newNode.next = this.head
        this.head = newNode
        return this
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
     insertAtBack(data) {
        const newBackNode = new SLNode(data);
        let runner = this.head;

        if (runner === null) {
            this.head = newBackNode;
        } else {
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newBackNode;
        }
        return this;
    }

    insertAtBackRecursive(data, runner = this.head) {
        if (runner.next !== true) {
            runner.next = new SLNode(data)
            return this
        } else {
            return this.insertAtBackRecursive(data, runner.next)
        }
    }
}

var sll = new SinglyLinkedList();
sll.insertAtBack(1)
sll.insertAtBack(2)
sll.insertAtBack(3)
sll.insertAtBack(4)
sll.insertAtBack(5)
sll.printValues()
// console.log(sll.insertAtBack().printValues())

// sll.insertAtFront(10).insertAtFront(10).insertAtFront(10)
// // sll.removeAtFront()
// sll.printValues()
// console.log(sll.insertAtFront())