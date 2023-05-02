$(document).ready(function() {
  $("#arrowbusiness").hide();
  $("#tutorialbutton").click(function () {
   
     
     $("#audio-17").trigger("play")
     setTimeout(function() {
       $("#arrowbusiness").fadeIn();
       $("#business1").trigger("play");
     }, 8000); 

   });
   const tutorialButton = document.getElementById("tutorialbutton");

   tutorialButton.addEventListener("click", function() {
 
   $("#tutorialbutton").hide();
  })
 });