var minSubArrayLen = function(target, nums) {

    nums = nums.sort((a,b)=>b-a);
    console.log(nums);
    let count=0;

    for(let i=0; i<nums.length; i++){
      
      if(target<=0){
        break;
      }

      target = target-nums[i];
      count++;
      
    }
    if(target<=0){
      return count;
    }
    return 0;
};

console.log(minSubArrayLen(213,
[12,28,83,4,25,26,25,2,25,25,25,12]));