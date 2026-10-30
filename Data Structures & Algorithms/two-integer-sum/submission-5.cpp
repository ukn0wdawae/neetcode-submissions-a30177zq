class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> map;
        int s {0};

        for(int i{0}; i<nums.size(); i++){
            s = target - nums[i];
            if(map.find(s) != map.end()){
                return {map[s],i};
            }
            map[nums[i]] = i;
        }
             
    }
};
