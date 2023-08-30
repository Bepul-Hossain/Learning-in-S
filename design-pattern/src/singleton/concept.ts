export class Singleton{
    static instance: Singleton
    id: number
    
    constructor(id: number){
        this.id = id;
        console.log(Singleton.instance);
        if(Singleton.instance){
            return Singleton.instance
        }
        
        Singleton.instance = this;
    }
}

const obj1 = new Singleton(1);
const obj2 = new Singleton(2);

console.log(obj1===obj2);
console.log(obj1.id);

console.log(obj2.id);

