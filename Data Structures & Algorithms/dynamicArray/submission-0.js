class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.items = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if (!Number.isInteger(i)) throw new TypeError('i must be an integer');
        if (i<0 || i >= this.items.length) throw new RangeError('index is below 0 or more than length');
        return this.items[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if (!Number.isInteger(i)) throw new TypeError('i must be an integer');
        if (i<0 || i >= this.items.length) throw new RangeError('index is below 0 or more than length');
        this.items[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        let insert_index=0;
        //find the index of last number element
        for (let i = this.items.length-1; i>=0; i--){
            if (this.items[i] !== undefined){
                insert_index = i+1; 
                break;
            }
        }
        //if this is the last element resize
        if (this.getCapacity() === insert_index) this.resize();

        //insert the new item in the above index+1
        this.set(insert_index,n);
    }
    // pushback(n) {
    // // Step 1: Check if the array is full by using your own methods.
    // const currentSize = this.getSize();
    // const currentCapacity = this.getCapacity();

    // if (currentSize === currentCapacity) {
    //     // Step 2: If it's full, resize it!
    //     this.resize();
    // }

    // // Step 3: Now that we know there's space, add the element.
    // // The insertion index is simply the current size.
    // this.items[currentSize] = n;
    // }

    /**
     * @returns {number}
     */
    popback() {
        let pop_index = 0
        //find the index of last number element
        for (let i = this.items.length-1; i>=0; i--){
            if (this.items[i] !== undefined){
                pop_index = i; 
                break;
            }
        }
        let element = this.get(pop_index);
        //set pop_index to undefined
        this.items[pop_index]= undefined;

        //return the popped element
        return element
    }

    /**
     * @returns {void}
     */
    resize() {
        const old = this.items;
        const newLength = Math.max(1,old.length*2);
        const newArray = new Array(newLength);
        for (let i=0; i < old.length; i++){
            newArray[i] = old[i]
        }
        this.items = newArray;

    }

    /**
     * @returns {number}
     */
    getSize() {
        //iterate through array and return number of elements that are not null
        let count = 0;
        for (let i=0; i<this.items.length;i++){
            if (this.items[i] === undefined) continue;
            else count = count+1;
        }
        return count;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.items.length
    }
}
