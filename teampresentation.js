$(document).ready(function() {

    $(".circle").hide();
    $("#arrowdownload").hide();
   $("#tutorialbutton").click(function() {
     
     $("#audio-14").trigger("play");
     setTimeout(function() {
       $(".circle").fadeIn().animate({"top":"900px"},5000)
       $("#audio-15").trigger("play");
     }, 9000); 

     

     setTimeout(function() {
       $("#audio-16").trigger("play");
       $("#arrowdownload").fadeIn();
     }, 19000); 

   })

 });