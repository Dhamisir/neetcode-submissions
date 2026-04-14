class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
       let len=word1.length+word2.length;
       let i =0;
       let output="";
       while(i<len){
            if(word1[i]){
                output+=word1[i]
            }
            if(word2[i]){
                output+=word2[i]
            }
            i++;
       }
       return output;
    }
}
