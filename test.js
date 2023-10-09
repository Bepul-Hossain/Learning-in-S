let res = [];
let arr = [1, 2, 3];


res.push(arr, arr);

let len = res.length;
res[len-1][3] = 5; 
console.log(res);
