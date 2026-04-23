class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let ans = -1;
        while (i < j) {
            let small = Math.min(heights[i], heights[j]);
            let diff = j - i;
            let area = small * diff;
            ans = Math.max(ans, area)
            if (heights[i] <= heights[j]) {
                i++;
            }else{
                j--;
            }
        }
        return ans;
    }
}
