from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        # Initialize our result array with 1s
        answer = [1] * n
        
        # Step 1: Calculate left products
        left_product = 1
        for i in range(n):
            # The current index gets the running product of everything to its left
            answer[i] = left_product
            # Update the left_product for the NEXT index
            left_product *= nums[i]
            
        # Step 2: Calculate right products and multiply them into the answer
        right_product = 1
        for i in range(n - 1, -1, -1):
            # Multiply the existing left product by the running right product
            answer[i] *= right_product
            # Update the right_product for the NEXT index (moving leftwards)
            right_product *= nums[i]
            
        return answer