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
            console.log("LIST IS EMPTY")
            return
        }
        // if the list is not empty
        var runner = this.head
        // check to see if runner.next is not equal to null
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
            console.log("LIST IS EMPTY")
            return
        }
        // create a runner variable and assign it to this.head
        var runner = this.head
        // check to see if the runner is not null
        while (runner.next != null) {
            // if target equals to runner.value return true
            if (target === runner.value) {
                return true
            }
            // otherwise move the runner
            else {
                runner = runner.next
            }
        }
        // check to see if the target equals to the value, if so return true
        if (target === runner.value) {
            return true
        }
        // otherwise return false if not the target is not in the list
        else {
            return false
        }
    }
}