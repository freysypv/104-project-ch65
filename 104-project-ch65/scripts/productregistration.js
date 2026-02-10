//1 identify the form
const productform = document.querySelector("form");//search the html element

//define the constructor
function Product(name, price, category){
this.name = name;
this.price = price;
this.category = category;
}

// retrieve the info
function regiterProduct(event){
    event.preventDefault();//void reset
     //console.log("connected")

//use the input name to pullthe data
const name = productform.elements["productName"].value;
const price = productform.elements["productPrice"].value;
const category = productform.elements["productCategory"].value;
 
//creater the object
//const newProduct = new Product(radio, 5, eletronic)
const newProduct = new Product(name, price, category)
console.log(newProduct);


//use the information - create the row on the table
}
 function displayrow() {

 }


