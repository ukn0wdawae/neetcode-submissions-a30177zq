class Solution:
    def maxArea(self, heights: list[int]) -> int:
        l, r = 0, len(heights) - 1
        res = 0

        while l < r:
            # Calculate the current area
            width = r - l
            current_height = min(heights[l], heights[r])
            area = width * current_height
            
            # Update the maximum result
            res = max(res, area)
            
            # Move the pointer pointing to the shorter bar
            if heights[l] < heights[r]:
                l += 1
            else:
                r -= 1
            
        return res