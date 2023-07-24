var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    UserAccount.prototype.age = function (num) {
        console.log(num);
        return this.name;
    };
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
console.log(user);
var namea = user.age(20);
console.log(namea);
