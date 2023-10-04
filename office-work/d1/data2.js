const fs = require('fs');
const d = [];
    d[0] = require('./input/b2c-ops-updated-26-Sept-0-to-100-records.json');
    d[1] = require('./input/b2c-ops-updated-26-Sept-100-to-200-records.json');
    d[2] = require('./input/b2c-ops-updated-26-Sept-200-to-300-records.json');
    d[3] = require('./input/b2c-ops-updated-26-Sept-300-to-400-records.json');
    d[4] = require('./input/b2c-ops-updated-26-Sept-400-to-500-records.json');
    d[5] = require('./input/b2c-ops-updated-26-Sept-500-to-600-records.json');
    d[6] = require('./input/b2c-ops-updated-26-Sept-600-to-700-records.json');
    d[7] = require('./input/b2c-ops-updated-26-Sept-700-to-800-records.json');
    d[8] = require('./input/b2c-ops-updated-26-Sept-800-to-900-records.json');
    d[9] = require('./input/b2c-ops-updated-26-Sept-900-to-1000-records.json');
    d[10] = require('./input/b2c-ops-updated-26-Sept-1000-to-1100-records.json');
    d[11] = require('./input/b2c-ops-updated-26-Sept-1100-to-1200-records.json');

const bookingCode = require('./bookingCode.json');
const bookingId = require('./bookingId.json');


const codeIdSet = new Set();
for (let item of bookingCode) {
    if (item["Booking Code"]) {
        codeIdSet.add(item["Booking Code"])
    }
}

for (let item of bookingId) {
    if (item["BOOKING ID"]) {
        codeIdSet.add(item["BOOKING ID"])
    }
}


let arr = [];

for(let item of d){
    for(let child of item){
        let bookingCode = child.bookingCode;
        if(!codeIdSet.has(child.bookingCode)){
            arr.push(bookingCode);
        }
    }

}

console.log(arr);



fs.writeFile('./newbookingCodeData.json', JSON.stringify(Array.from(codeIdSet)), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})
