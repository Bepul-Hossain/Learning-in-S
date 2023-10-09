function minMoves(nums) {
    var count = 0;
    //add set type
    var set = new Set();
    for (var i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    console.log(set);
    while (set.size !== 1) {
        console.log(set);
        count++;
        var max = nums[0];
        var highestIdx = 0;
        for (var i = 1; i < nums.length; i++) {
            if (max < nums[i]) {
                max = nums[i];
                highestIdx = i;
            }
        }
        set.delete(nums[highestIdx]);
        nums[highestIdx]--;
        set.add(nums[highestIdx]);
    }
    return count;
}
;
console.log(minMoves([1, 2, 3]));
