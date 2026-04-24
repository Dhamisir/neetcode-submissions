class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let total = 0;
        let leftMax = height[left];
        let rightMax = height[right];
        while (left < right) {
            if (height[left] <= height[right]) {
                let diff = leftMax - height[left]
                total += diff < 0 ? 0 : diff;
                leftMax=Math.max(leftMax,height[left]);
                left++;
            } else {
                let diff = rightMax - height[right]
                total += diff < 0 ? 0 : diff;
                rightMax=Math.max(rightMax,height[right]);
                right--;
            }
        }
        return total;
    }
}
