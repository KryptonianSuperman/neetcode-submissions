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
        const stringFrequency = new Map()
        for(;rp<s.length; rp++){
            stringFrequency.set(s[rp], (stringFrequency.get(s[rp]) || 0) +1)
            let mostFrequentItemSize = Math.max(...stringFrequency.values())
            // console.log("mostFrequentSize", mostFrequentItemSize)
            let windowSize = rp-lp +1
            // console.log("windowSize", windowSize)
            if(windowSize - mostFrequentItemSize > k){
                while(lp<rp && windowSize - mostFrequentItemSize > k){
                // console.log("weregettignherE", lp, s[lp])
                    const lpFreq = stringFrequency.get(s[lp])
                    if( lpFreq > 1){
                        stringFrequency.set(s[lp], lpFreq-1)
                    } else{
                        stringFrequency.delete(s[lp])
                    }
                    lp++
                    windowSize--
                    mostFrequentItemSize = Math.max(...stringFrequency.values())
                }
            }
            // console.log("maxLength", maxLength, "windowSize", windowSize)
            maxLength = Math.max(maxLength, windowSize)
            // console.log("maxLength", maxLength)
        }
        return maxLength
    }
}
