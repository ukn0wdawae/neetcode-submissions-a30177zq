class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        //split each element into array of alphabets
        let split_arr = []
        for (let i = 0; i <= strs.length-1; i++){
            split_arr[i] = [...strs[i]].sort();
            if (map.has(split_arr[i].sort().join(""))){
                map.get(split_arr[i].sort().join("")).push(i);
            }else{
                map.set(split_arr[i].sort().join(""), [i])
            }
        }
        // print the map indexes as array of arrays for the index positions stored
        const final_arr = [...map.values()].map((group) => {
            return group.map((index) => strs[index]);
        });

        return final_arr;
    }
}
