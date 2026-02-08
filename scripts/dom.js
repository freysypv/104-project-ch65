function ChangeTitle() {
  //testing
  //alert("is connected!");
  // get the HTML element with id="title and store it in a variable"
  var title = document.getElementById("title");

  //change the text inside the title
  title.innerHTML = "Hello cohort 65!";

  // Get All elements with a class and store them in a variable
  var paragraphs = document.getElementsByClassName("text");

  paragraphs[0].style.color = "blue";
  paragraphs[1].style.color = "red";
}

function addItem() {
  let inputvalue = document.getElementById("itemInput").value;

  let list = document.getElementById("list");

  let li = document.createElement("li");
  li.innerHTML = inputvalue;
  inputvalue = "";

  list.appendChild(li);
}
