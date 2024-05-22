const axios = require("axios");
class Users {
  static all() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        return resp;
      });
  }
}
// Users.all();

module.exports = Users;
