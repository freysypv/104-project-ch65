let names = ["freysy", "sergio", "Dejanirra","Timothy"]
let age
 names[1];
 console.log(names[3]);
 //modify values
 names[0] = "aymon";
 console.log(names);

 //add a value to the end of the array-> push
 //1. calll the array w/o position
 //2.call the push method
 //3. provide the new value

 names.push("freysy");
 console.log(names);

 // add a value to the beggining of the array->unshift

 names.unshift("Fernanda");
 console.log(names);

 //revove the last item
 //ask google:js Array remove last item ,pop() method
names.pop();
console.log(names);

//remove the first item -> shift
names.shift();
console.log(names);

//Remove item from specific position -> splice
// splice(position, how many?)
names.splice(1,2);
console.log(names);

//team 

let movies = ["The Godfather", "The Matrix ", "Fight Club ","Forrest Gump","Gladiator "]
console.log(movies);

movies[0]; // "The Godfather"
console.log(movies[0]); //"The Godfather"
console.log(movies[4]); //"Gladiator"

movies[2]="Casablanca";
console.log(movies);

movies.unshift("El chavo del 8");
console.log(movies);

names.shift(movies[4]);
console.log(movies);

