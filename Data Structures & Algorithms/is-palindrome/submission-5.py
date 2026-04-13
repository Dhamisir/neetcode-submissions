class Solution:
    def isPalindrome(self, str: str) -> bool:
        i = 0;
        j = len(str)-1;
        while i<j:
            if not isAlphaNum(str[i]):
                i+=1;
                continue;
            if not isAlphaNum(str[j]):
                j-=1;
                continue;
            if str[i].lower() != str[j].lower():
                return False;
            i+=1;
            j-=1;
        
        return True;




def isAlphaNum(c):
    if c.lower()>='a' and c.lower()<='z':
        return True;
    if c>="0" and c<="9":
        return True;
    return False;