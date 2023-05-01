$(document).ready(function() {
    $("#arrowbusiness").hide();
   $("#tutorialbutton").click(function() {
     
     $("#audio-17").trigger("play")
     setTimeout(function() {
       $("#arrowbusiness").fadeIn();
     }, 8000); 

   })
 });