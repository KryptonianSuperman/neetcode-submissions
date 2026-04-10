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
        // console.log(occurenceNums)
        const sortedOccurenceNums = new Map([...occurenceNums.entries()].sort((a,b) =>  b[1] - a[1]))
// sortedOccurenceNums.forEach(console.log)
        const res = new Array(k)
        const iterationSortedOccurenceNums = sortedOccurenceNums.keys()
        for(let i =k-1; i >=0 ; i--){
            res[i] = iterationSortedOccurenceNums.next().value
        }
        // console.log(res)
        return res
    }
}
