const currentDateTime = ()=>{
    function addZero(str) {
        return str < 10 ? ('0' + str) : str;
    }

    const currentdate     = new Date(); 
    const datetime        = addZero(currentdate.getFullYear()) + "-" +
                        addZero(currentdate.getMonth()+1)  + "-"+
                        addZero(currentdate.getDate()) + " "  + 
                        addZero(currentdate.getHours()) + ":"   +
                        addZero(currentdate.getMinutes()) + ":" + 
                        addZero(currentdate.getSeconds());
    
    
    return datetime;
    
}

module.exports = {
    currentDateTime
}