$(document).ready(function() {
  $("#aboutarrow").hide();
  $("#arrowtodownload").hide();
    $("#tutorialbutton").click(function() {
      $("#audio-1").trigger("play");
      
      setTimeout(function() {
        $("#audio-2").trigger("play");
        $('html, body').animate({
          scrollTop: $(document).height()
        }, 10000)
      }, 7500);
      setTimeout(function(){
        $('html, body').animate({
          scrollTop: $(document).height()
        }, 10000)
      }, 10000)
      setTimeout(function(){
        $('html, body').animate({
          scrollTop: 0
        }, 2000)
      }, 27000)
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

  