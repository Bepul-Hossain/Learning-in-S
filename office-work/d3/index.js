const fs = require('fs')
const BookingCode = require('./input/ticket-not-updated.json');
let BookingCodeSetB2B = new Set();
let BookingCodeSetB2C = new Set();
for (let item of BookingCode) {
    if (item["Bookind Code"] !==undefined && item["Category"] !==undefined && item["Category"].toUpperCase() === "B2B") {
        BookingCodeSetB2B.add(item["Bookind Code"])
    }
    if (item["Bookind Code"] && item["Category"] && item["Category"].toUpperCase() === "B2C") {
        BookingCodeSetB2C.add(item["Bookind Code"])
    }
}


fs.writeFile('./output/ticket-not-updated-B2B.json', JSON.stringify(Array.from(BookingCodeSetB2B)), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})
fs.writeFile('./output/ticket-not-updatedB2C.json', JSON.stringify(Array.from(BookingCodeSetB2C)), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})
