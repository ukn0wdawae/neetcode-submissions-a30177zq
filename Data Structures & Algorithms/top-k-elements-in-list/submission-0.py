from collections import Counter

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        #traverse the array and make a dictionary
        counts = Counter(nums)
        counts_k = counts.most_common(k)
        final_arr = []
        for i in counts_k:
            final_arr += [i[0]]
        return final_arr
            


        