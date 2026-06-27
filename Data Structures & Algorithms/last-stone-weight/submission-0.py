import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = []
        x,y=0,0

        for num in stones:
            heapq.heappush(max_heap,-num)

        #while len > 1 
        while len(max_heap) > 1:
            #pop heap twice and get 2 largest
            x = -heapq.heappop(max_heap)
            y = -heapq.heappop(max_heap) 
            #check if they are equal
            if x==y:
                #destroy two stones
                continue
            else:
                #calculate diff and push it into heap
               heapq.heappush(max_heap,-(x-y)) 

        last = 0 
        if len(max_heap)==1:
            last = -heapq.heappop(max_heap)
        else:
            last = 0
        
        return last