class Solution:
    def validPalindrome(self, str) -> bool:
        if self.isPalindrome(str):
            return True;
        for i in range(len(str)):
            newStr=str[:i]+str[i+1:]
            if self.isPalindrome(newStr):
                return True;
        return False;
        
    def isPalindrome(self,str) -> bool:
        i=0;
        j=len(str)-1;
        while i<j:
            if not self.isAlphaNum(str[i]):
                i+=1;
                continue;
            if not self.isAlphaNum(str[j]):
                j-=1;
                continue;
            if str[i].lower() != str[j].lower():
                return False;
            i+=1;
            j-=1;
        return True;

    def isAlphaNum(self,c)->bool:
        if(c.lower()>='a' and c.lower()<='z'):
            return True;
        if(c>='0' and c<='9'):
            return True;
        return False;