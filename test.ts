let nums =[3,2,1,0,4]

var canJump = function (nums: number[]): boolean  {
    let n: number = nums.length;
    let table: number[] = new Array<number>(n)
    table.fill(0);
    table[n-1] = 1;

    const  anyNonZero=(p, q) =>{
        for (let i = p; i < q; i++) {
            if (table[i+1]!== 0) return true;
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
            for (let j = p; j < q; j++) {
                table[j] = 1;
            }
        }
    }
    if (table.includes(0)) {
        return false;
    }
    return true;
};

console.log(canJump(nums));