function validEmail(email){
    const regex = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return regex.test(email);
  }

  console.log(validEmail("epul.cse@@mail.com"))