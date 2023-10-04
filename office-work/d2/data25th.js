const fs = require('fs')
const BookingCode = require('./input/Ticket not updated on 25th Sept.json');

const BookingCodeSet = new Set();
for(let item of BookingCode){
    if(item["Booking Code"]){
        BookingCodeSet.add(item["Booking Code"])
    }
}


fs.writeFile('./output/Ticket not updated on 25th Sept.json', JSON.stringify(Array.from(BookingCodeSet)), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})
