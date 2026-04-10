class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const sMap = new Map()
        // const tMap = new Map()
        // const sArray = s.split("")
        // const tArray = t.split("")
        for(const char of s){
            if(sMap.has(char)){
                sMap.set(char, (sMap.get(char)|| 0)+1)
            } else{
                sMap.set(char, 1)
            }
        }
        // console.log("sArray", sArray)
        sMap.forEach(console.log)
        for(const char of t){
            if(sMap.has(char)){
                let iterationsOfChar = sMap.get(char)
                iterationsOfChar--
                if(iterationsOfChar === 0){
                    sMap.delete(char)
                } else{
                    sMap.set(char, iterationsOfChar)
                }
            } else{
                return false
            }
        }
        // console.log("tArray", tArray)
        sMap.forEach(console.log)

        // if(sMap.size === 0){
            return true
        // }

    }
}
