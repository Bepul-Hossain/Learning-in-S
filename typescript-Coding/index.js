function reverseParentheses(s) {
    var indexes = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === ')') {
            indexes.push(i);
        }
    }
    var mid = indexes.length >> 1;
    var res = "";
    var count = 0;
    // if(mid%2===0){
    //     res = s.substring(indexes[mid-1]+1,indexes[mid]);
    //     mid= mid-1;
    // }
    // if(mid%2===1){
    //     res = s.substring(indexes[mid-1]+1, indexes[mid]);
    //     mid=mid-1;
    //     count=2;
    // }
    while (count < mid) {
        var leftLeftIdx = indexes[mid - 1 - count];
        var leftRightIdx = indexes[mid - count];
        var a1idx = indexes[mid - count + 1];
        var leftSubString = s.substring(leftLeftIdx + 1, leftRightIdx).split("").reverse().join('');
        var s1 = s.substring(leftRightIdx + 1, a1idx);
        console.log("s1===", s1);
        var rightLeftIdx = indexes[mid + count - 1];
        var rightRightIdx = indexes[mid + count];
        var a2idx = indexes[mid + count + 1];
        var rightSubString = s.substring(rightLeftIdx + 1, rightRightIdx).split("").reverse().join('');
        var s2 = s.substring(rightRightIdx + 1, a2idx);
        console.log("s2 ==", s2);
        res = rightSubString + s1 + res + leftSubString + s2;
        console.log(res);
        count = count + 2;
    }
    console.log(indexes);
}
;
console.log(reverseParentheses("(i(lo(ve(b(ac)ng)la)desh))"));
// function minMoves(nums: number[]): number {
//     let count = 0;
//     //add set type
//     let set  = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         set.add(nums[i]);
//     }
//     console.log(set);
//     while (set.size !== 1) {
//         console.log(set);
//         count++;
//         let max = nums[0];
//         let highestIdx = 0;
//         for (let i = 1; i < nums.length; i++) {
//             if (max < nums[i]) {
//                 max = nums[i];
//                 highestIdx = i;
//             }
//         }
//         set.delete(nums[highestIdx]);
//         nums[highestIdx]--;
//         set.add(nums[highestIdx])
//     }
//     return count;
// };
// console.log(minMoves([1, 2, 3]));
