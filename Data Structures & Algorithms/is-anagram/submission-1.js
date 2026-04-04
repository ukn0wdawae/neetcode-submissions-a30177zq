class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {   
        let obj1 = {};
        let obj2 = {};

        for (let i in s){
            if (obj1[s[i]] === undefined){
                obj1[s[i]] = 0;
            }else{
                obj1[s[i]] += 1;
            }
            if (obj2[t[i]] === undefined){
                obj2[t[i]] = 0;
            }else{
                obj2[t[i]] += 1;
            }
        }

        for (let key of Object.keys(obj1)) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        if (t.length !== s.length) return false;

        return true;

    }
}