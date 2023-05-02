$(document).ready(function() {
  $(".circle").hide();
   $("#tutorialbutton").click(function() {
     
     $("#business2").trigger("play");

     setTimeout(function() {
      $(".circle").fadeIn().animate({"margin-left":"730px"},300);
     }, 6200); 

   })

 });