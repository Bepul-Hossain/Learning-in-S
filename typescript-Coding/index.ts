function twoSum(nums: number[], target: number): number[] {

  let obj: { [key: number]: number } = {};

  let res: Array<number> = []
  for (let i: number = 0; i < nums.length; i++) {
    if(obj[nums[i]]!==undefined){
      console.log(obj[nums[i]]);
      res.push(obj[nums[i]]);
      res.push(i);
      break;
    }else{
      
      obj[target-nums[i]] = i;
    }
  }
  return res;

}

console.log(twoSum([3, 2, 4], 6));
