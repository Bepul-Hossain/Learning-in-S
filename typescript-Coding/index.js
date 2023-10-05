function removeKdigits(num, k) {
    var stack = [];
    var n = num.length;
    var current = num[0];
    for (var i = 1; i < n; i++) {
        if (num[i] >= current) {
            stack.push(current);
            current = num[i];
        }
        else {
        }
    }
}
;
console.log(removeKdigits("14301620", 4));
