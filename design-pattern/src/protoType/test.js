let person = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
]


let copiedPerson = {...person};
copiedPerson[0]=[13, 1, 2]

console.log(copiedPerson);
console.log(person);