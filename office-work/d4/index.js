const fs = require('fs')
const { TaggaClub } = require('./input/tagga.js');
// const { tagaClub } = require('./input/hello.js');

// console.log(tagaClub);
// let TaggaClub = tagaClub;
console.log(TaggaClub);

let TaggaCodes = {};

return;

let count = 0;
for (let item of Object.values(TaggaClub)) {
    const value = Object.values(item);
    count++;
    TaggaCodes[value[0]]=value[0];
}
console.log(Object.keys(TaggaCodes).length);
fs.writeFile('./output/TaggaCodes.json', JSON.stringify(TaggaCodes), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote the unique Code and unique Id json file')
    }
})
