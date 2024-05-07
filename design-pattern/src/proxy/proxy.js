const createProxyValidate = (user) => {
    const handler = {
        get(target, prop) {
            if (prop === 'name' && target[prop].length < 3) {
                return "Name should be greater than 3 character";
            }
            else if (prop === 'age' && target[prop] < 18) {
                return "Age should be greater than 18";
            }
            else if (prop === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(target[prop])) {
                return "Email should be valid";
            }
            return target[prop];
        },
        set(target, prop, val) {
            console.log(target, prop, val);
            if (prop === 'name' && (val !== 'string' || val.length < 3)) {
                throw new Error("Name should be string and greater than 3 character");
            }
            else if (prop === 'age' && (val !== 'number' || val < 18)) {
                throw new Error("Age should be greater than 18");
            }
            else if (prop === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) {
                throw new Error("Email should be valid");
            }
            return target[prop] = val;

        }
    };

    return new Proxy(user, handler);
}

function main() {
    const user = {
        name: 'Alice',
        age: 10,
        email: 'bepul@gmail.com'
    };
    const proxiedObject = createProxyValidate(user)
    console.log(proxiedObject.name);
    console.log(proxiedObject.age);
    console.log(proxiedObject.email);

    try {
        proxiedObject.name = 5;
    } catch (error) {
        console.log("Name  ", error);
    }

    try {
        proxiedObject.age = 10;
    } catch (error) {
        console.log("Age  ", error);
    }

    try {
        proxiedObject.email = 'abc@23.232';
    } catch (error) {
        console.log("Email  ", error);
    }

}
main();