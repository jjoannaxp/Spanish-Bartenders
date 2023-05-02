$(document).ready(function() {
    $(".arrowdiv").hide();
    $("#tutorialbutton").click(function() {
      $("#audio-1").trigger("play");
     
      setTimeout(function() {
        $("#audio-2").trigger("play");
      }, 7500);
      setTimeout(function() {
        $("#arrowtodownload").fadeIn();
    }, 29000);
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
      $("#arrowabout").fadeIn().animate({top: "60px"}, 500);
    }, 38000);
    });
  });

  