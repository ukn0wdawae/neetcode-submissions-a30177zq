class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        res = []
        # Sort the array to use two pointers and handle duplicates
        nums.sort()

        for i, a in enumerate(nums):
            # Optimization: If the smallest number is > 0, 
            # three positive numbers can't sum to 0.
            if a > 0:
                break

            # Skip the same value as the previous one to avoid duplicate triplets
            if i > 0 and a == nums[i - 1]:
                continue

            # Two Pointers approach
            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                
                if threeSum > 0:
                    # Sum too large, move right pointer left
                    r -= 1
                elif threeSum < 0:
                    # Sum too small, move left pointer right
                    l += 1
                else:
                    # Found a triplet
                    res.append([a, nums[l], nums[r]])
                    
                    # Move pointers to find the next potential pair
                    l += 1
                    r -= 1
                    
                    # Crucial: Skip duplicate values for the left pointer
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
                        
        return res