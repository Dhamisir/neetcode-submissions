class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(arr1, m, arr2, n) {
        let i = m - 1;
        let j = n - 1;
        let index = arr1.length - 1;
        while (index >= 0) {
            if (j >= 0 && arr2[j] > arr1[i]) {
                arr1[index] = arr2[j];
                j--;
            } else {
                arr1[index] = arr1[i];
                i--;
            }
            index--;
        }
        while (j >= 0) {
            arr1[j] = arr2[j];
            j--;
        }
    }
}
