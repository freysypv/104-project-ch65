let petSalon = [];


class Pet {
  constructor(Name, Age, Gender, Services, Breed) {

    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.Services = Services;
    this.Breed = Breed;


  }
}
   
for (let i = 0; i < petSalon.length; i++) {
  let pet = petSalon[i];
    let row = `
     <tr>
        <td>${pet.Name}</td>
        <td>${pet.Age}</td>
        <td>${pet.Gender}</td>
        <td>${pet.Services}</td>
        <td>${pet.Breed}</td>
      </tr>`;
      petDisplayArea.innerHTML += row;
      petDisplayArea.appendChild(row);
    }

  let petsList = [
    {
      Name: "Luna",
      Age: "4 years old",
      Gender: "female",
      Services: "hair cut",
      Breed: "lab",
    }, 
    {
      Name: "Lola",
      Age: "6 years old",
      Gender: "female",
      Services: "hair cut",
      Breed: "german shepheld",
    },
    {
      Name: "Choco",
      Age: "3 years old",
      Gender: "male",
      Services: "hair cut",
      Breed: "beagle",
    }
  ];

  

  for (let i = 0; i < petsList.length; i++) {
    
    petDisplayArea.innerHTML += `<li>pet: ${petsList.Name}</li>`;
  }

    let pet4 = new Pet("King", "4", "male", "Pow-dicure","Lab");
    let pet5 = new Pet("moe", "10", "male", "Grooming","lab");
    let pet6 = new Pet("Teddy", "8", "male", "bath and brush","beagle");

      console.log(pet4.Name);
      console.log(pet5.Name);
      console.log(pet6.Name);

 //============
 // REGITER PET
 // ==========

const clientform = document.getElementById("petForm");

function regiterpet(event){
  event.preventDefault();

  
   const Name = clientform.elements["petName"].value;
   const Age = clientform.elements["petAge"].value;
   const Breed = clientform.elements["petBreed"].value;
   const Gender = clientform.elements["petGender"].value;
   const Services = clientform.elements["petService"].value;


  const newPet = new Pet(
   document.getElementById('Name').value,
   document.getElementById('Age').value,
   document.getElementById('Gender').value,
   document.getElementById('Services').value,
   document.getElementById('Breed').value
  );

  console.log(newPet);
  //identify the body

  const body = document.getElementById("petDisplayArea")

  //use the info - create the row on the table
  const row = document.createElement("tr");

  // define the content of the row

  row.innerHTML =`
  <td>${newPet.Name}</td>
  <td>${newPet.Age}</td>
  <td>${newPet.Gender}</td>
  <td>${newPet.Services}</td>
  <td>${newPet.Breed}</td>
  <td><button onclick="deleteRow(this)" class="btn btn-outline-danger">Delete</button></td>
  `



  body.appendChild(row);

  document.getElementById("petForm").reset();

}

function deleteRow(buttonElement) {
buttonElement.closest('tr').remove();
}
