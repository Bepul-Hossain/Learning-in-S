interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }


class Test{

    add(str){
        console.log(str);
         
    }
    get(){
        return "hello";
    }
}


// ! don't understand "declare" keyword: declare const backpack: Backpack<string>; 

const backpack: Backpack<string>=new Test();
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
console.log(object);

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("23");




