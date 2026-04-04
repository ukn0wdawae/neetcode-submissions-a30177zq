class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let s_reverse = "";

        const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        for (let i = cleanedStr.length -1 ; i >=0 ; i--){
            s_reverse += cleanedStr[i];
        }
        

        if (s_reverse === cleanedStr) return true;

        return false;
    }
}
