//object literal
let person1 = {
  name: "freysy",
  lastname: "Pena",
  email: "freysy@skdgu.edu",
};

let person2 = {
  name: "fre",
  lastname: "veras",
  email: "freysy@skdgu.edu",
};
let person3 = {
  name: "frey",
  lastname: "Pena",
  email: "freysy@skdgu.edu",
};

// Access to the attributes of an object
//person1.name1;

//console.log(person1.name);

// Display the person names in the html/brawser

let paragraph = document.createElement("p");
paragraph.innerHTML = person2.name;
document.body.appendChild(paragraph);

let personList = [person1, person2, person3];
console.log(personList[0].lastname);

//1.get the list
let list = document.getElementById("personList");

for(let i=0; i<personList.length; i++){

//2 create the list item HTML element
let li = document.createElement("li");

//.3 assign the person name to the list item
li.innerHTML =`<b> ${personList[0].name}</b>`;

//.4 add the list item to the list
 list.appendChild(li);
}




//=====need for hw======
 //constructor 
 // is a function

 function Student(name, lastname, email){
  this.name = name;
  this.lastname = lastname;
  this.email = email;

 }

 //create an object with the constructor
 let student1 = new Student("kate", "Frantz", 30);

 //print in the conselo the student's name
console.log(student1.name);