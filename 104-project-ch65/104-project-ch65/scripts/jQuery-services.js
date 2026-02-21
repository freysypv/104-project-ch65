$(document).ready(function() {
    $('#select-service').change(function() {
        let description = $(this).find('option:selected').data('description');

        if (description) {
            $('#data-description p').text(description);
        } else {
            $('#data-description p').text('No description available.');
        }
    });

    $('#select-service').change(function() {
        let price = $(this).find('option:selected').data('price');

        if (price) {
            $('#data-price p').text(price);
        } else {
            $('#data-price p').text('No price available call fosr information.');
        }
    });

    $('button[type="submit"]').click(function() {
        $('#form-select').text('');
    });
  
    $('button[type="reset"]').click(function() {
        $('#data-description p').text('');
    });


});


$("#servicesForm").submit(function(event) {
    event.preventDefault();

    // console.log(event)
    const name = $("#servicename").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = parseFloat($("#servicePrice").val().trim());   
    
    $(this).find("input, textarea").css("border", "");      

    let isValid = true;


   

    // if(!name || !description || !price || price <= 0 ){
       
        $("#servicename").css("border","solid 2px red");

        if(!name){
            $("#servicename").css("border","solid 2px red");
            isValid = false;
        }else{
            $("#servicename").css("border","");
        }

        if(!description){
           $("#serviceDescription").css("border","solid, 2px, red");
              isValid = false;

        }else{
            $("#serviceDescription").css("border",""); 
            
        }
        if(!price){
            $("#servicePrice").css("border","solid 2px red");
            isValid = false;
        
        }else {
            $("#servicePrice").css("border","");
        }

      if (isValid) {
        const formData = $(this).serialize();
        console.log('Form data is valid. Submitting:', formData);
         this.reset();
      } else {
        console.log('Please fill out all fields correctly.');}
    
  
}); 


// Dark-mode
 $("#changeModeButton").click(function() {
    $("body").toggleClass("dark-mode");

    $("#changeModeButton").text("🌗")

 });








