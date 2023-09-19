var nums = [3, 2, 1, 0, 4];
var canJump = function (nums) {
    var n = nums.length;
    var table = new Array(n);
    table.fill(0);
    table[n - 1] = 1;
    var anyNonZero = function (p, q) {
        for (var i = p; i < q; i++) {
            if (table[i + 1] !== 0)
                return true;
        }
        return false;
    };
    for (var i = n - 2; i >= 0; i--) {
        var count = nums[i];
        var q = i + count;
        if (q > n)
            q = n;
        var p = i;
        var isNonZero = anyNonZero(p, q);
        if (isNonZero) {
            for (var j = p; j < q; j++) {
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
