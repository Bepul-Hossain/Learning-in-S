function minMoves(nums: number[]): number {
    let count = 0;
    //add set type
    let set  = new Set();

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    console.log(set);
    while (set.size !== 1) {
        console.log(set);
        
        count++;
        let max = nums[0];
        let highestIdx = 0;

        for (let i = 1; i < nums.length; i++) {
            if (max < nums[i]) {
                max = nums[i];
                highestIdx = i;
            }
        }
        set.delete(nums[highestIdx]);
        nums[highestIdx]--;
        set.add(nums[highestIdx])
    }
    return count;
};
console.log(minMoves([1, 2, 3]));
