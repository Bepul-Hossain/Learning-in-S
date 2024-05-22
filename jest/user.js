const request = require("./request");

function getUserName(userID) {
  //   return "Mark";
  return request(`/users/${userID}`).then((user) => user.name);
}

module.exports = getUserName;
