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
}

Displaypets();






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

  // For loop empieza aqui
  // i cambia en cada ciclo. 
  // Ciclo 1, i=0
  // Ciclo 2, i=1
  // Ciclo 3, i=2