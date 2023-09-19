function twoSum(nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            console.log(obj[target - nums[i]]);
        }
        else {
            obj[target - nums[i]] = nums[i];
        }
    }
    console.log(obj);
    return [1, 3];
}
console.log(twoSum([2, 7, 11, 15], 9));
