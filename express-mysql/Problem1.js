class Animal {

    constructor(name) {
      console.log("Animal constructor called!");
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
      return this.name;
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
      console.log("hmm", super.run())

    }
  
    stop() {
      //Problem: ------------------>>>>>>>>>>console.log(super); // In here super is not found so how super.stop() method found. 
      this.hide(); // and then hide
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");

  rabbit.hide(); // White Rabbit stands still. White Rabbit hides!


