class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::unordered_map<int,int> map;

        for( int i{0}; i < nums.size(); i++){
            int searchNum {target - nums[i]};
            if(map.find(searchNum) != map.end()){
                return {map[searchNum],i};
            }
            map[nums[i]] = i;
        }

        
    }
};
