class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const occurenceNums = new Map()
        for(const num of nums){
            occurenceNums.set(num, (occurenceNums.get(num) || 0)+1)
        }
        let buckets = new Array(nums.length +1).fill().map(()=>[])
        // console.log("buckets", buckets)
        // occurenceNums.forEach(console.log)
        for (const [num, freq] of occurenceNums){
            buckets[freq].push(num)
        }
        // console.log("buckets after", buckets)
        let res = []
        for(let i = buckets.length; i>0 && res.length !== k; i--){
            if(buckets[i]){
                res.push(...buckets[i])
            }
        }
        return res
    }
}
