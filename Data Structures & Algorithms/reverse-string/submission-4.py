import math;
class Solution:
    def reverseString(self, s: List[str]) -> None:
        i = 0;
        j = len(s)-1
        while i<math.floor(len(s)/2):
            temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i+=1;
            j-=1;
        
