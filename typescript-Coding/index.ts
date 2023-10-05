function removeKdigits(num: string, k: number): string {
    let stack = [];
    let n = num.length;
    let current = num[0];
    
    for (let i = 1; i < n; i++) {
        if(num[i]>=current){
            stack.push(current);
            current = num[i];
        }else{

        }
    }
};
console.log(removeKdigits("14301620", 4));
