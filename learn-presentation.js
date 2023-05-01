$(document).ready(function() {
    $("#tutorialbutton").click(function() {
      $("#audio-14").trigger("play");
      $("#arrow1").delay(7000);
      $("#arrow1").animate({top: "60px"}, 500);
      setTimeout(function() {
        $("#audio-2").trigger("play");
      }, 7500);
      setTimeout(function() {
        $("#circle").css("display", "block");
    }, 33000);
    setTimeout(function() {
      $("#audio-3").trigger("play");
    }, 30000);
    setTimeout(function() {
      $("#aboutaudio").trigger("play");
    }, 38000);
    setTimeout(function() {
      $("#arrow2").animate({top: "60px"}, 500);
    }, 38000);
    });
  });