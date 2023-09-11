let nums = [2,4,1,0,2,0,1,2,3];




var canJump = function (nums) {
    let n = nums.length;
    let table = new Array(n).fill(0);
    table[n] = 1;

    const  anyNonZero=(p, q) =>{
        // console.log(p, q);
        for (let i = p; i < q; i++) {
            if (nums[i]!== 0) return true;
        }
        return false
    };

    for (let i = n - 2; i >= 0; i--) {
        let count = nums[i];
        let q = i + count;
        if (q > n) q = n;
        let p=i;
        
        const isNonZero = anyNonZero(p, q);
        
        if (isNonZero){
            console.log("table", table);
            for (let j = p; j < q; j++) {
                table[j] = 1;
            }
        }
    }
    console.log(table);
    if (table.includes(0)) {
        return false;
    }
    return true;

};

console.log(canJump(nums));