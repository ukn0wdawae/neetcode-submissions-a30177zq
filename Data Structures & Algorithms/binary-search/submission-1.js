class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let arrLength = arr.length;

    if (arrLength === 0) {
        return -1;
    }

    if (arrLength === 1) {
        return arr[0] === target ? 0 : -1;
    }

    let mid = Math.floor(arrLength / 2);
    
    let mid_element = arr[mid];
    if (mid_element === target) {
        return mid;
    } else if (mid_element<target){
        let result = this.search(arr.slice(mid+1), target);
        return result === -1 ? -1 : result + mid+1;
    }else {
        return this.search(arr.slice(0,mid), target);
    }
}
}
