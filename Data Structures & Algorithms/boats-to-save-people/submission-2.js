class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>a-b);
        let i=0;
        let j=people.length-1;
        let count=0;
        while(i<=j){
            let sum=people[i]+people[j];
            console.log(people[i],people[j],sum)
            if(sum>limit){
                j--;
                count++;
            }else if(sum==limit){
                i++;
                j--;
                count++;
            }else{
                i++;
                j--;
                count++

            }
        }
        return count;
    }
}
