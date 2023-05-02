$(document).ready(function() {
  $("#tutorialbutton").click(function () {

    $("#arrowbusiness").hide();
   
     
     $("#audio-17").trigger("play")
     setTimeout(function() {
       $("#arrowbusiness").fadeIn();
       $("#business1").trigger("play");
     }, 8000); 
           
     setTimeout(function() {
      window.location.href = "financials-presentation.html";
    }, 10000);

   });
   const tutorialButton = document.getElementById("tutorialbutton");

   tutorialButton.addEventListener("click", function() {
 
   $("#tutorialbutton").hide();
  })
  
 });