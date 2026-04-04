class MinStack {
    constructor() {
        this.stack = new Array();
        this.minStack = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0){
            this.stack.push(val);
            this.minStack.push(val);
            return;
        }

        if (this.stack.length > 0){
            const min = this.minStack[this.minStack.length - 1];
            if (val <= min) this.minStack.push(val);
            this.stack.push(val);
        }
        return;

    }

    /**
     * @return {void}
     */
    pop() {
     const t = this.stack.pop();
     const m = this.minStack.pop()
     if (t === m){
        return;
     }else {
        this.minStack.push(m);
     }
     return;
    }

    /**
     * @return {number}
     */
    top() {
        const t = this.stack.pop();
        this.stack.push(t);
        return t;
    }

    /**
     * @return {number}
     */
    getMin() {
        const t = this.minStack.pop();
        this.minStack.push(t);
        return t;
    }
}
