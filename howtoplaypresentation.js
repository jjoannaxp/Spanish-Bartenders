$(document).ready(function() {
    $(".circle").hide()
$("#arrowlearn").hide();
   $("#tutorialbutton").click(function() {
     
     $("#audio-9").trigger("play");
     $(".circle").fadeIn().animate({"top":"650px"},3800)
     $(".circle").animate({"top":"1050px"},5300)
     $(".circle").animate({"top":"1450px"},7000)
     $(".circle").fadeOut(7500)

     setTimeout(function() {
       $("#audio-10").trigger("play");
       $("#arrowlearn").fadeIn();
     }, 23000); 

   })

 });