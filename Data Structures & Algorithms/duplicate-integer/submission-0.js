class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dict = {};
        for (let i = 0; i< nums.length; i++){
            console.log(nums[i])
            if (dict[nums[i]] > 0){
                return true;
            }
            if (dict[nums[i]] === undefined){
                dict[nums[i]] = 0;                
            }
            dict[nums[i]] += 1;
        }
       return false;

    }
}
