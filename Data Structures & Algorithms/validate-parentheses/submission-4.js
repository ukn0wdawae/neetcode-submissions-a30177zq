class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    
    isValid(s) {
        let stack = new Array();
        for (let i = 0; i < s.length; i++ ){
            if (s.length % 2 != 0){
                return false;
            }

            if (s[i] === '('){
                stack.push('(')
            }
            if (s[i] === ')'){
                const t = stack.pop()
                if (t != '(') return false 
            }
            if (s[i] === '{'){
                stack.push('{')
            }
            if (s[i] === '}'){
                const t = stack.pop()
                if (t != '{') return false 
            }
            if (s[i] === '['){
                stack.push('[')
            }
            if (s[i] === ']'){
                const t = stack.pop()
                if (t != '[') return false 
            }
        }

        if (stack.length != 0) return false;

        return true
    }
}
