class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<pair<int,int>> numsWithIndex;
        for(int i{0}; i< nums.size(); i++){
            numsWithIndex.push_back({nums[i],i});
        }
        sort(numsWithIndex.begin(),numsWithIndex.end());
        int p1 {0};
        int p2 {static_cast<int>(nums.size())-1};
        while(true){
            if(numsWithIndex[p1].first + numsWithIndex[p2].first > target){
                p2 -= 1;
            }else if(numsWithIndex[p1].first + numsWithIndex[p2].first < target){
                p1 += 1;
            }else{
                break;
            }
        }
        if(numsWithIndex[p1].second < numsWithIndex[p2].second){
            return {numsWithIndex[p1].second,numsWithIndex[p2].second};
        }else{
            return {numsWithIndex[p2].second,numsWithIndex[p1].second};
        }
    }
};
