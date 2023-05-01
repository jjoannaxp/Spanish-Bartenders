$(document).ready(function() {

     $(".circle").hide();
     $("#arrowteam").hide();
    $("#tutorialbutton").click(function() {
      
      $("#audio-11").trigger("play");
        
      
      setTimeout(function() {
        $(".circle").fadeIn().animate({"top":"1000px"},5000)
        $("#audio-12").trigger("play");
      }, 11000); 

      setTimeout(function() {
        $(".circle").fadeIn().animate({"top":"1700px"},1000)
      }, 25000); 

      setTimeout(function() {
        $("#audio-13").trigger("play");
        $("#arrowteam").fadeIn();
      }, 27000); 

    })

  });