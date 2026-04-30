class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int: 
        max_len = 0
        store = []
        for i in s:
            #if duplicate
                #update maxlen to length of store
                #find pos of duplicate
                #remove all elements before that
            if i in store:
                if len(store) > max_len:
                    max_len = len(store)
                index = store.index(i)
                store = store[index+1:]
            # add to store
            store += i
        if len(store) > max_len:
            max_len = len(store)
        return max_len