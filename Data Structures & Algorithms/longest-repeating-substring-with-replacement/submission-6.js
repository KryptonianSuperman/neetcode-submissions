class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0
        let lp = 0
        let rp = 0
        let mostFrequentItemSize =0
        const stringFrequency = new Map()
        for(;rp<s.length; rp++){
            let currFreq = (stringFrequency.get(s[rp]) ||0)+1
            stringFrequency.set(s[rp], currFreq)
            mostFrequentItemSize = Math.max(mostFrequentItemSize, currFreq)
            // console.log("mostFrequentSize", mostFrequentItemSize)
            let windowSize = rp-lp +1
            // console.log("windowSize", windowSize)
            if(windowSize - mostFrequentItemSize > k){
                // console.log("weregettignherE", lp, s[lp])
                const lpFreq = stringFrequency.get(s[lp])
                if( lpFreq > 1){
                    stringFrequency.set(s[lp], lpFreq-1)
                } else{
                    stringFrequency.delete(s[lp])
                }
                lp++
                windowSize--
            }
            // console.log("maxLength", maxLength, "windowSize", windowSize)
            maxLength = Math.max(maxLength, windowSize)
            // console.log("maxLength", maxLength)
        }
        return maxLength
    }
}
