function letterCombinations(digits) {
    var n = digits.length;
    if (n === 0)
        return [];
    var res = [];
    var diglen = digits.length;
    var obj = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    var subArr = [];
    for (var i = diglen - 1; i >= 0; i--) {
        var currentDigit = digits[i];
        var curStr = obj[currentDigit];
        var curArr = curStr.split("");
        console.log(curArr);
    }
    return res;
}
;
console.log(letterCombinations("23"));
// function combinationSum(candidates: number[], target: number): number[][] {
//     let ans: Array<number>[] = [];
//     let tmpArr: Array<number> = [];
//     let n = candidates.length;
//     let index: number = 0;
//     const recursion = (ans: Array<number>[], tmpArr: Array<number>, n: number, target: number, index: number) => {
//         if (target === 0) {
//             ans.push([...tmpArr]);
//             return;
//         }
//         for (let i = index; i < n; i++) {
//             if (target - candidates[i] >= 0) {
//                 tmpArr.push(candidates[i]);
//                 recursion(ans, tmpArr, n, target - candidates[i], i);
//                 tmpArr.splice(tmpArr.indexOf(candidates[i]), 1);
//             }
//         }
//     }
//     // tmpArr=[1,5]
//     recursion(ans, tmpArr, n, target, index);
//     return ans;
// };
// console.log(combinationSum([2, 3, 5], 8));
