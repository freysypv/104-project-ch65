$("P")
// old way

// how to trigger an event after clicking a button?
// using jQuery
// selector then      action
$("#triggerEventButton").click(function(){                 //Anonymous function
    alert("Hello class! Happy Valentine's Day");
});

$("#hideButton").click(function(){                 
 $("p").hide();
});
$("#showButton").click(function(){  
    $("p").show();
                
   
});
$("#toggleButton").click(function(){                
    $("p").toggle();
});
$("#changeTextButton").click(function(){              
    $("p").text(" This is the new text.");
});
$("#addCssButton").click(function(){      
    $("p").css("color","blue")
    .css("border","solid, red, 2px")
    .css("psdding","1px")
    .css("background-color","yellow")
    ;              
     
});
$("#applayCssButton").click(function(){ 
    $("p").addClass("my-class");               
   $("")
});


 // Dark-mode
 $("#changeModeButton").click(function() {
    $("body").toggleClass("dark-mode");

    $("#changeModeButton").text("🌗")

 });

 //also can use html //for assament