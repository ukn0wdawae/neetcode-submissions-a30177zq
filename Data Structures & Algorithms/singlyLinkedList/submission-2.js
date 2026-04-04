class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1

    let currentNode = this.head

    for (let i=0; i<index; i++ ){
        currentNode = currentNode.next;
    }

    return currentNode.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const prevHead = this.head;
        const newHead = new ListNode(val)
        newHead.next = prevHead;
        this.head = newHead;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        if(this.size === 0) {
        this.insertHead(val)
        return;
    }

    const newNode = new ListNode(val)
    let currentNode = this.head;

    // Traverse to the very last node
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

    currentNode.next = newNode;
    this.size++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index<0|| index>= this.size) return false;
    if (index===0) {
        this.head = this.head.next;
        this.size--;
        return true;
    }
    let currentNode=this.head
    if (index===this.size-1){
        for(let i=0;i<this.size-2;i++){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.size--;
        return true;
    }
    for(let i=0;i<index-1;i++){
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    this.size--;
    return true
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
        if (this.head === null){
            return arr;
        }
        let currentNode = this.head;
        while(currentNode.next != null){
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        arr.push(currentNode.val);
        return arr;
    }
}
