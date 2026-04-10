class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const storedNums = new Map()
        for(let i=0; i<=nums.length-1;i++){
            const secondNum = target - nums[i]
            // const storedPairIndex = storedNums.get(secondNum)
            if(storedNums.has(secondNum)){
                return [storedNums.get(secondNum), i]
            } else{
                storedNums.set(nums[i], i)
            }
        }
    }
}
