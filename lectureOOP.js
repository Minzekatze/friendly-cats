//const objectLiteral = {
//    name: "my name",
//    study: function(){
//        console.log("I'm suffering!");
//    }
//}

class Student {
    constructor(name, age = 18, hobbies = []) {
      this.name = name;
      this.age = age;
      this.hobbies = hobbies;
    }
  
    study() {
      console.log(`${this.name} is suffering!`);
    }
  
    talkAboutMyHobbies() {
      //console.log(`${this.name} is talking about their hobbies!`);
      this.hobbies.forEach(
        function (hobby) {
          console.log(`${this.name} looooooove to ${hobby}`);
        }.bind(this)
      );
    }
  
    bindedTalkAboutMyHobbies() {
      //console.log(`${this.name} is talking about their hobbies!`);
      this.hobbies.forEach((hobby) => {
        console.log(`${this.name} looooooove to ${hobby}`);
      });
    }
  }
  
  const newStudent = new Student("student 1", 25);
  const newStudent2 = new Student("student 2");
  const newStudent3 = new Student("student 3", 20, ["painting", "hiking"]);
  
  //console.log(newStudent);
  //console.log(newStudent2);
  //console.log(newStudent3);
  
  //newStudent.talkAboutMyHobbies();
  //newStudent3.talkAboutMyHobbies();
  //newStudent2.study();
  //newStudent2.study();
  
  //console.log(typeof newStudent);
  
  //console.log(this);

//encapsulation

class Student {
  #name;

  #firstName;
  #lastName;

  get getMarks(){
      //TODO

      return [10,9,7];
      //return this.#firstName + this.#lastName;
  }    

  set setName(name){
      this.#name = name;
  }
}

const anStudent = new Student();

anStudent.setName = "my name";

console.log(anStudent.getName);

//inheritance



class Animal {
  constructor(weight, habitat){
      this.weight = weight;
      this.habitat = habitat;
  }

  move() {
      console.log("the animal is moving");
  }
}



class Dog extends Animal{
  constructor(name, breed, weight = 10, habitat = 'street'){
      super( weight, habitat);
      this.name = name;
      this.breed= breed
      this.isGoodDog = true;
  }
}

class Cat extends Animal{
  constructor(name, breed, weight = 5, habitat = 'barn'){
      super( weight, habitat);
      this.name = name;
      this.breed= breed
      this.isCute = true;
  }
}

const anAnimal = new Animal(10.5, "terrestrial");
const aDog = new Dog("bobby", "chiuahua");
const aCat = new Cat("Gardfield", "orange");

//console.log(anAnimal);
//console.log(aDog);
//console.log(aCat);

//console.log(aCat instanceof Cat);
//console.log(aCat instanceof Animal);
//console.log(aCat instanceof Dog);

//console.log(typeof Animal);
//anAnimal.move();
//aCat.move();

function Fish(weight, habitat) {
  this.weight = weight;
  this.habitat = habitat;
}

const aFish = new Fish(0.05, "deep sea");

console.log(aCat);
console.log(aFish);

Object.setPrototypeOf(aFish, Animal);

console.log(aFish);


//Polymorphism

class Shape{
  #name; 
  
  get getName() {
      return this.#name;
  }

  set setName(name) {
      this.#name = name;
  }

  draw (){
      console.log("drawing a shape");
  }
}

class Circle extends Shape{
  constructor(name){
      super(name);
  }

  draw (){
      console.log("drawing a circle");
  }
}

class Square extends Shape {
  constructor(name){
      super(name);
  }

  //draw (){
  //    console.log("drawing a square");
  //}
}

const aShape = new Shape("random");
const aCircle = new Circle("circle");
const anSquare = new Square("square");

//console.log(aShape);
//console.log(aShape.draw());
//console.log(aCircle);
//console.log(aCircle.draw());
//console.log(anSquare);
//console.log(anSquare.draw());

console.log(aCircle instanceof Circle);
console.log(aCircle instanceof Shape);
console.log(aCircle instanceof Object);