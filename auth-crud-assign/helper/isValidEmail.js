const isValidEmail=(email)=>{
  const regex = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
  return regex.test(email);
}

const isValidPass=(pass)=>{
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(pass);
}
const isValidName=(name)=>{
  const regex = /(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
  return regex.test(name);
}


module.exports = {
    isValidEmail,
    isValidPass,
    isValidName
}