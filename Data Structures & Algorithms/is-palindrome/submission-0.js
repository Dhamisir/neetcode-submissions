class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        let alpha="abcdefghijklmnopqrstuvwxyz";
        let num="0123456789"
        let str1="";
        for(let i in str){
            if(alpha.includes(str[i].toLowerCase()) || num.includes(str[i])){
                str1+=str[i]
            }
        }
        let str2=str1.split("").reverse().join("")
        return str1.toLowerCase()==str2.toLowerCase()
    }
}
