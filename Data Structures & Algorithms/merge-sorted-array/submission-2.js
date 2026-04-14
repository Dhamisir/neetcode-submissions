class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {                                     
        let i=0;
        let j=0;
        let nums1Copy=[...nums1]
        let idx=0;
        while(i<nums1Copy.length && j<nums2.length){
            if(i==m){
                break;
            }
            if(j==n){
                break;
            }
            if(nums1Copy[i]<=nums2[j]){
                nums1[idx]=nums1Copy[i]
                i++;
            }else{
                nums1[idx]=nums2[j]
                j++;
            }
            idx++
        }

        while(i<nums1Copy.length){
            if(i==m){
                break;
            }
            nums1[idx]=nums1Copy[i]
            idx++
            i++;
        }

        while(j<nums2.length){
            if(j==n){
                break;
            }
            nums1[idx]=nums2[j]
            j++;
            idx++
        }
    }
}
