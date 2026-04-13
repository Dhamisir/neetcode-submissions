class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        let i =0;
        let j = str.length-1;
        while(i<j){
            if(!this.isAlphaNum(str[i])){
                i++;
                continue;
            }
            if(!this.isAlphaNum(str[j])){
                j--;
                continue;
            }
            if(str[i].toLowerCase()!=str[j].toLowerCase()){
                return false;
            }
            i++;
            j--;
        }
        return true;
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
// js2 -> 23ms, 10.3mb