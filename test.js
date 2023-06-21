/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    let n = nums.length;
    let finalCost = Infinity;
    for(let i=0; i<n; i++){
        let makeNum = nums[i];
        let curCost = 0;
        for(let j=0; j<n; j++){
            if(i===j) continue;
            let dif = Math.abs(nums[j]-makeNum);
            curCost = curCost + (cost[j]*dif);

        }
        if(curCost<finalCost){
            finalCost = curCost;
        }
    } 
    return finalCost;
};


console.log(minCost([1,3,5,2], [2,3,1,14]));