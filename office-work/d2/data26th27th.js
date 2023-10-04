const fs = require('fs')
const BookingCode26 = require('./input/Ticket not updated 26th Sept.json');
const BookingCode27 = require('./input/Ticket not updated from 27th sept to 30th sept.json');

const BookingCodeB2B = new Set();
const BookingCodeB2C = new Set();
for (let item of BookingCode26) {
    if (item["Platform"] && item["Platform"] === "B2B" && item["Booking Code"]) {
        BookingCodeB2B.add(item["Booking Code"])
    }
    if (item["Platform"] && item["Platform"] === "B2C" && item["Booking Code"]) {
        BookingCodeB2C.add(item["Booking Code"])
    }
}

for (let item of BookingCode27) {
    if (item["Category"] && item["Category"] === "B2B" && item["Booking Code"]) {
        BookingCodeB2B.add(item["Booking Code"])
    }
    if (item["Category"] && item["Category"] === "B2C" && item["Booking Code"]) {
        BookingCodeB2C.add(item["Booking Code"])
    }
}


fs.writeFile('./output/Ticket not updated on 26th Sept 27th to 30th sept B2B.json', JSON.stringify(Array.from(BookingCodeB2B)), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})

fs.writeFile('./output/Ticket not updated on 26th Sept 27th to 30th sept B2C.json', JSON.stringify(Array.from(BookingCodeB2C)), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})
