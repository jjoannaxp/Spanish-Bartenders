$(document).ready(function() {
  $(".circle").hide();
   
     
     $("#business2").trigger("play");

     setTimeout(function() {
      $(".circle").fadeIn().animate({"margin-left":"730px"},300);
     }, 6200); 
    });
    setTimeout(function() {
      window.location.href = "financial-presentation.html";
    }, 6500);

     const tutorialButton = document.getElementById("tutorialbutton");

     tutorialButton.addEventListener("click", function() {
   
     $("#tutorialbutton").hide();
     

  tutorialButton.addEventListener("click", function() {

  $("#tutorialbutton").hide();
});
 });