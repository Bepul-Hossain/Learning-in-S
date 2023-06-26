var combine = function(n, k) {

    let result = [];

    function dfs(index, current){
        //base case
        if(current.length===k){
            result.push([...current])
        }

        for(let i=index; i<=n; i++){
            current.push(i);
            dfs(i+1, current);
            current.pop();
        }
    }
    dfs(1, []);
    return result;
 };

console.log(combine(4,2));
// let backtrack=(curr, firstNum, ans)=> {
//     let res=[];
//     if (curr.length === 2) {
//         ans.push(curr);
//         res=ans;
//         return;
//     }
    
//     for (let num = firstNum; num <= 4; num++) {
//         curr.push(num);
//         backtrack(curr, num + 1, ans);
//         curr.pop();
//     }

//     return res;
// }

// console.log(backtrack([], 1, []));