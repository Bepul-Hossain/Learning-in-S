/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */

const costCal =(n, pairs)=>{
    let curCost=0;
    for(let j=1; j<n; j++){
        let dif = Math.abs(pairs[j][0]-pairs[0][0]);
        curCost = curCost + (pairs[j][1]*dif);
    }

    return curCost;
}

var minCost = function(nums, cost) {
    let totalCost = cost.reduce((a,b)=>a+b);
    let left = 0;
    let right = 0;

    let n = nums.length;
    let pairs = [];

    for(let i=0; i<n; i++){
        pairs.push([nums[i], cost[i]]);
    }
    pairs.sort((a,b)=>a[0]-b[0])

    // console.log(pairs);

    const costFirstNum = costCal(n, pairs);

    console.log(costFirstNum);


    let finalCost = Infinity;
    let curCost = costFirstNum;

    for(let i=1; i<n; i++){
        left = left+pairs[i-1][1];
        right = totalCost-left;
        
        let dif = Math.abs(pairs[i][0]-pairs[i-1][0]);
        curCost = curCost - (dif*right)+(dif*left);

        // console.log(curCost);
        if(curCost<finalCost){
            finalCost = curCost;
        }
    } 
    if(costFirstNum<finalCost){
        finalCost=costFirstNum;
    }

    return finalCost;
};


console.log(minCost([4,10], [2,1]));