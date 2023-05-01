$(document).ready(function() {
    
    $("#circle").delay(11000).animate({"top":"1000px"},500);
    $("#tutorialbutton").click(function() {
      
        $("#audio-11").trigger("play");
      
      setTimeout(function() {
        $("#audio-12").trigger("play");
      }, 11000);
    })
  });