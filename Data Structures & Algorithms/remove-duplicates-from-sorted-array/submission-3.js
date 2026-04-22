class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 1;
        let index = 1;
        while (i < nums.length) {
            if (nums[i] != nums[i - 1]) {
                nums[index] = nums[i]
                index++;
            }
            i++;
        }
        return index;
    }
}
