$(document).ready(function() {
    $("#tutorialbutton").click(function() {
       $("#audio-1").trigger("play");
      
      $("#arrow1").animate({top: "60px"}, 500)

      // $("#audio-2").trigger("play");
      $("#circle").animate({
        "display": "block"
      })
    });
  });