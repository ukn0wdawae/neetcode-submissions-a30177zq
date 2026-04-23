from collections import defaultdict
from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Dictionaries where the default value is an empty Hash Set
        rows = defaultdict(set)
        cols = defaultdict(set)
        boxes = defaultdict(set)
        
        for r in range(9):
            for c in range(9):
                val = board[r][c]
                
                # Ignore empty cells
                if val == ".":
                    continue
                
                # Calculate which 3x3 box we are currently in
                box_coord = (r // 3, c // 3)
                
                # If we've seen this number in the current row, col, or box, it's invalid
                if (val in rows[r] or 
                    val in cols[c] or 
                    val in boxes[box_coord]):
                    return False
                
                # Otherwise, add the number to our sets to track it
                rows[r].add(val)
                cols[c].add(val)
                boxes[box_coord].add(val)
                
        # If we check every cell and find no duplicates, the board is valid
        return True