class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Initialize max_profit to 0
        max_profit = 0
        # Initialize the lowest price seen so far to the first day's price
        min_price = prices[0]
        
        for price in prices:
            # If we find a lower price, update min_price
            if price < min_price:
                min_price = price
            
            # Calculate potential profit if we sold today
            current_profit = price - min_price
            
            # Update max_profit if current_profit is higher
            if current_profit > max_profit:
                max_profit = current_profit
                
        return max_profit