let obj = {
    des:function(a, cba){
        cba(2,8);
        console.log(cba(2,8));
        return a*a;
    },
    file: function(){
        return "file";
    }
}

console.log(obj.des(5, function(c,d){return c+d}));
console.log(obj.file());