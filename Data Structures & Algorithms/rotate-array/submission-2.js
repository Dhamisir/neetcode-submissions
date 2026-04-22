class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(arr, r) {
        let arrCopy = [...arr];
        let k = r % arr.length;
        let idx = 0;
        let len=arr.length-k;
        for (let i =len; i < arr.length; i++) {
            arr[idx++] = arrCopy[i]
        }

        for (let i = 0; i <= len - 1; i++) {
            arr[idx++] = arrCopy[i]
        }

    }
}
