class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let lp = 0;
        let maxLength = 0
        let stringSet = new Set()
        for(let rp =0 ; rp<s.length; rp++ ){
        // console.log(s[lp],s[rp])
            if(stringSet.has(s[rp])){
        // console.log(s[lp],s[rp])

                do {
                        stringSet.delete(s[lp])
                        lp++
        // console.log(s[lp],s[rp])

                    } while(stringSet.has(s[rp]))
            } else{
                stringSet.add(s[rp])
        // console.log(s[lp],s[rp])

            }
            stringSet.add(s[rp])
        // console.log(s[lp],s[rp])

            maxLength = Math.max(maxLength, stringSet.size)
            // console.log("maxLength", maxLength)
        }
        return maxLength
    }
}
