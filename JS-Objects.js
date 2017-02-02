function carMaker(make, model, year, color) {
  var speed = 20;
  return {
    make: make,
    model: model,
    year: year,
    color: color,
  getCarInfo: function() {
    return this.make + ", " + this.model + ", " + this.year + ", " + this.color;
  },
  getSpeed: function() {
    return speed;
  },
  accelerate: function() {
    speed+=10;
  },
  brake: function() {
    var randBrake=(Math.floor(Math.random()*(speed/2+1)));
    console.log("Random brake amount:" + randBrake);
    speed-=randBrake;
  },
  slowBrake: function(){
    speed-=1;
  }
  };
};
var car1 = carMaker("Toyota", "Camry", 2017, "Green");

car1.getCarInfo();

car1.getSpeed();
car1.accelerate();
car1.brake();
car1.getSpeed();


var car2 = carMaker("BMW", "M4", 2017, "Yellow");
//Accelerates the car to 50
while(car2.getSpeed() < 50){
  car2.accelerate();
  console.log("Accelerating: " + car2.getSpeed());
}
//Decelerate the car to 0, makes sure it stops at 0.
while(car2.getSpeed() > 0){
  if(car2.getSpeed() > 10){
    car2.brake();
    console.log("Decelerating: " + car2.getSpeed());

  }
  else{
    car2.slowBrake();
    console.log("Slow Decelerating: " + car2.getSpeed());
  }

}
//Setting a upper limit on speed to 85, using while/if statments;
console.log("car2's current speed is " + car2.getSpeed());
while(car2.getSpeed() <= 85) {
  car2.accelerate();
  console.log("Accelerating to 85 " + car2.getSpeed());
  if (car2.getSpeed() >= 75 && car2.getSpeed() <= 85) {
    console.log("Car2 reached 80, loop broken");
    break;
  }
}
//Story 5: brake() change the speed by a rnadom amount.
var counter = 1;
console.log("Original speed " + car2.getSpeed());
while(car2.getSpeed() > 0){
  console.log(car2.getSpeed());
  car2.brake();
  console.log("The current iteration is: " + counter);
  counter++;
}
