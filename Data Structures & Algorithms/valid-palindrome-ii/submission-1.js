class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if(!!this.isPalindrome(s)){
            return true;
        }

        for(let i=0; i<s.length; i++){
            let newStr=s.slice(0,i) + s.slice(i+1)
            if(!!this.isPalindrome(newStr)){
                return true;
            }
        }
        return false;
    }

    isPalindrome(s){
        let i=0;
        let j=s.length-1;
        while(i<j){
            if(!this.isAlphaNum(s[i])){
                i++;
                continue;
            }
            if(!this.isAlphaNum(s[j])){
                j--;
                continue;
            }
            if(s[i]!=s[j]){
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
        return false;
    }
}

