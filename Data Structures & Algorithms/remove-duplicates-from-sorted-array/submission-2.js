class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let numsCopy=[...nums]
        let map=new Map();
        let idx=0;
        for(let i=0; i<numsCopy.length; i++){
            console.log(numsCopy[i],map.has(numsCopy[i]))
            if(!map.has(numsCopy[i])){
                nums[idx++] = numsCopy[i]
            }
            map.set(numsCopy[i],1)
        }
        return idx;
    }
}
