const fs = require('fs')
const bookingCode = require('./bookingCode.json');
const bookingId = require('./bookingId.json');

const codeIdSet = new Set();
for(let item of bookingCode){
    if(item["Booking Code"]){
        codeIdSet.add(item["Booking Code"])
    }
}

for(let item of bookingId){
    if(item["BOOKING ID"]){
        codeIdSet.add(item["BOOKING ID"])
    }
}


fs.writeFile('./newCodeIdData.json', JSON.stringify(Array.from(codeIdSet)), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})
