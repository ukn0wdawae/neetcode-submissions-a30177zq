from collections import Counter
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        #s1 and s2
        #slide on s2 with window of s1
        r = len(s1)
        l = 0
        #check s1 perm on s2
        for l in range(len(s2)):
            if Counter(s1) == Counter(s2[l:r]):
                return True
            r+=1
        return False



        