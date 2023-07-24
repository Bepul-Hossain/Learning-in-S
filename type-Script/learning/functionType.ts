interface User {
    name: string;
    id: number;
    age: (obj: number)=>string;
}
   
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    age(num){
        console.log(num);
        return this.name;
    }
}

const user: User = new UserAccount("Murphy", 1);
console.log(user);

const namea:string = user.age(20);
console.log(namea);

