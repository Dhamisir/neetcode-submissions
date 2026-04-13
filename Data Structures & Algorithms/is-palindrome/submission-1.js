class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        let result="";
        for(let i=0; i<str.length; i++){
            if(this.isAlphaNum(str[i])){
                result+=str[i]
            }
        }
        return result.toLowerCase() == result.split("").reverse().join("").toLowerCase();
    }

    isAlphaNum(c){
        if(c.toLowerCase()>='a' && c.toLowerCase()<='z'){
            return true;
        }
        if(c>='0' && c<='9'){
            return true;
        }
    }
}
// js -> 24ms, 10.3mb
