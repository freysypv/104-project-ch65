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

 //print in the console the student's name
console.log(student1.name);






//  let = new Client ("King", "Moe", 30);

 //print in the console the student's name
// console.log(student1.name);

//  let petsList2 = [
//     {
//       Name: "",
//       Age: "",
//       Gender: "",
//       Services: "",
//       Breed: "",
//     }, 
//     {
//       Name: "",
//       Age: "",
//       Gender: "",
//       Services: "",
//       Breed: "",
//     },
//     {
//       Name: "",
//       Age: "",
//       Gender: "",
//       Services: "",
//       Breed: "",
//     }
//   ];

//   let petDisplayArea = document.getElementById("petsName2"); // <div id="petsName"></div>
 
//   for (let i = 0; i <= petsList2.length; i++) {
    
//     petDisplayArea.innerHTML += `<li>Client: ${petsList2[i].Name} </li>`;
//   }
// }






//console.log("Probando movernoes dentro de un array");
//console.log(`Cliente: ${petsList[i].Name} `);
//${petsList[i].Age} ${petsList[i].Breed}
//${petsList[i].Age} ${petsList[i].Breed}

  // console.log(petsList[2].Breed); // beagle
  // console.log(petsList[0].Name); //Luna
  // console.log(petsList[1].Age); // 6 years old

  // console.log(petsList[2].Name); // Choco
  // console.log(petsList[1].Breed); // german shepheld
  // console.log(petsList[1].Gender); // female
  // console.log(petsList);


