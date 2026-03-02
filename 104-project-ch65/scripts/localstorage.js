//seve
//1. get the value from the input
$("#saveBtn").click(function () {
   
     const username = $("#username").val().trim();
     const name = $("#nameInput").val().trim();
     const age = $("#ageInput").val().trim();
     const password = $("#passwordInput").val().trim();
//2.save the value to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("nameInput", name);
    localStorage.setItem("ageInput", age);
    localStorage.setItem("passwordInput", password);

    //3. clear the form for UX
    $("#username").val("");
    $("#nameInput").val("");
    $("#ageInput").val("");
    $("#passwordInput").val("");

});




//Get1. get the value from local storage
$("#getBtn").click(function (event) {
    event.preventDefault();
    //find the key in the value in local storage
    const username = localStorage.getItem("username");
    const name = localStorage.getItem("nameInput");
    const age = localStorage.getItem("ageInput");
    const password = localStorage.getItem("passwordInput");
 //diplay the value in the results   
    $("#result").text(`Username: ${username}, Name: ${name}, Age: ${age}, Password: ${password}`);
});

//delete
// localStorage.removeItem("username");
//  localStorage.clear(); remove all the data in local storage
$("#deleteBtn").click(function (event) {
    event.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("nameInput");
    localStorage.removeItem("ageInput");
    localStorage.removeItem("passwordInput");
    $("#result").text("");
});

//delete 
$("#deleteBtn").click(function (event) { 
    event.preventDefault();

    const confirmation = confirm("Are you sure?");

    if(confirmation){
        localStorage.clear();
    }

});


