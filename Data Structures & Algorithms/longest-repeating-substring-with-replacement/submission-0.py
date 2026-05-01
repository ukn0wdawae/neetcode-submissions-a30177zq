class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        res = 0
        
        l = 0
        maxf = 0
        for r in range(len(s)):
            # Add the current character to the frequency map
            count[s[r]] = 1 + count.get(s[r], 0)
            
            # Update the maximum frequency found in the current window
            maxf = max(maxf, count[s[r]])

            # If the current window is invalid, shrink it
            # (Window length - max frequency) = characters to replace
            while (r - l + 1) - maxf > k:
                count[s[l]] -= 1
                l += 1
            
            # Update the global maximum length
            res = max(res, r - l + 1)

        return res