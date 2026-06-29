class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1
        mid_idx = len(nums)//2
        mid = nums[mid_idx]
        if mid < target:
            res = self.search(nums[mid_idx+1:],target)
            return res + mid_idx + 1 if res != -1 else -1
        elif mid == target:
            return mid_idx
        else:
            return self.search(nums[:mid_idx],target)