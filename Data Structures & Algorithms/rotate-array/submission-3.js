class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(arr, r) {
        let k = r % arr.length;
        function rotate(i, j) {
            while (i < j) {
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
                i++;
                j--;
            }
        }
        rotate(0, arr.length - 1)
        rotate(0, k - 1)
        rotate(k, arr.length - 1)
    }
}
