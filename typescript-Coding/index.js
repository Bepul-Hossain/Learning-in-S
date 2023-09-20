function twoSum(nums, target) {
    var obj = {};
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            console.log(obj[nums[i]]);
            res.push(obj[nums[i]]);
            res.push(i);
            break;
        }
        else {
            obj[target - nums[i]] = i;
        }
    }
    return res;
}
console.log(twoSum([3, 2, 4], 6));
