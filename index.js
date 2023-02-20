//JSON
const student = [
  {
    firstName: "Han",
    lastName: "Solo",
  },
  {
    firstName: "Chew",
    lastName: "Bacca",
  },
];

console.log(JSON.stringify(student));

//JSON Parse
const text = '{"name" : "Dupont", "first_name" : "Jean"}';
const people = JSON.parse(text);

console.log(people.first_name);
console.log(people["first_name"]);


//kitty cat


class Cat {
    name;
    tiredness;
    hunger;
    loneliness;
    happiness;

    constructor(name, tiredness = 0, hunger = 0, loneliness = 0, happiness = 0){
        this.name = name;
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }
    feed(food){
        if(food ==="fish"){
            this.hunger += 3;
        }else if(food ==="mouse"){
            this.hunger += 2;
        }else{
            this.hunger = this.hunger;
        }
    }
    sleep(napTime){
        if(napTime ==="long"){
            this.tiredness += 5;
        }else if(napTime ==="short"){
            this.tiredness += 2;
        }else{
            this.tiredness = this.tiredness;
        }
    }
    meetFriend(friendName){
        if(friendName === "Peter"){
            this.loneliness += 5;
        }else if(friendName === "Greg"){
            this.loneliness += 3;
        }else if(friendName === "Elisa"){
            this.loneliness +=10;
        }else{
            this.loneliness = this.loneliness;
        }

    }
    loveMe(interaction){
        if(interaction === "cuddle"){
            this.happiness += 5;
        }else if (interaction === "pet"){
            this.happiness += 3;
        }else if (interaction === "play"){
            this.happiness += 2;
        }else {
            this.happiness = this.happiness;
        }
    }
}

const catName = document.querySelector(".catName");
const btnCreate = document.querySelector(".btn-create");
const catInit = document.querySelector(".catInit");
const btnMouse = document.querySelector(".btn-mouse");
const btnPeter = document.querySelector(".btn-peter");
const btnShort = document.querySelector(".btn-short");
const btnCuddle = document.querySelector(".btn-cuddle");

let newCat = new Cat();

btnCreate.addEventListener("click", () =>{
    newCat = new Cat(catName.value);
    catInit.innerHTML = JSON.stringify(newCat);

})


btnMouse.addEventListener("click", ()=>{
    newCat.feed("mouse");
    catInit.innerHTML = JSON.stringify(newCat);
})

btnPeter.addEventListener("click", ()=>{
    newCat.meetFriend("Peter");
    catInit.innerHTML = JSON.stringify(newCat);
})
btnShort.addEventListener("click", ()=>{
    newCat.sleep("short");
    catInit.innerHTML = JSON.stringify(newCat);
})

btnCuddle.addEventListener("click", ()=>{
    newCat.loveMe("cuddle");
    catInit.innerHTML = JSON.stringify(newCat);
})



