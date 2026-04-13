class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let L = 0
        let R = s.length - 1
        
        while (R > L) {
            while (R > L && !this.alphaNum(s[L])) {
                L++
            }
            while (R > L && !this.alphaNum(s[R])) {
                R--
            }
            if (s[L].toLocaleLowerCase() !== s[R].toLocaleLowerCase()) {
                return false
            }
            L++
            R--
        }

        return true
    }

    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        )
    }
}