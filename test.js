/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function(n, k) {
    let ans =[];
    let helperRec=(i,k,subset)=>{

        if(i>n){
            if(k===0){
                ans.push([...subset]);
            }
            return;
        }
    
        //select ith element
        subset.push(i);
        helperRec(i+1,k-1, subset);
    
        //skip the ith element
        subset.pop();
        helperRec(i+1, k, subset);
    
        return ans;
    }

    helperRec(1,k,[],[]);
    return ans;
};

console.log(combine(4,2));