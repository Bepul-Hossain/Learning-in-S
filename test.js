const isValidPass=(pass)=>{
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(pass);
  }

console.log(isValidPass("Bepul123"));