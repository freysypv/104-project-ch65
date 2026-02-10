
function Client (name, Age, Gender, Services, Breed) {
   

        this.Nameame = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Services = Services;
        this.Breed = Breed;
      }


function Displaypets() {

  //let estructuraDeUnArray = [{},{},{}];

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

  let petDisplayArea = document.getElementById("petsName"); // <div id="petsName"></div>
 
  for (let i = 0; i <= petsList.length; i++) {
    
    petDisplayArea.innerHTML += `<li>Client: ${petsList[i].Name} </li>`;
  }

        let pet4 = new Client("King", "4", "male", "Pow-dicure","Lab");
        let pet5 = new Client("moe", "10", "male", "Grooming","lab");
        let pet6 = new Client("Teddy", "8", "male", "bath and brush");

        console.log(pet4.Name);
        console.log(pet5.Name);
        console.log(pet6.Name);


        // petDisplayArea.innerHTML += `<li>Client: ${pet4.name}  </li>`; 
        //  petDisplayArea.innerHTML += `<li>Client: ${pet5.name}  </li>`;
        //   petDisplayArea.innerHTML += `<li>Client: ${pet6.name}  </li>`;

}  
 
  

  

  

Displaypets();

 
     