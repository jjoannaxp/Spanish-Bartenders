$(document).ready(function() {

     $(".circle").hide();
     $("#arrowteam").hide();
    
      $("#audio-11").trigger("play");
        
      
      setTimeout(function() {
        $(".circle").fadeIn().animate({"top":"1000px"},5000)
        $("#audio-12").trigger("play");
        $('html, body').animate({
          scrollTop: $("#features").offset().top - 200
        }, 2000)
      }, 11000); 

      setTimeout(function() {
        $(".circle").fadeIn().animate({"top":"1700px"},1000)
        $('html, body').animate({
          scrollTop: $("#level").offset().top - 200
        }, 2000)
      }, 25000); 

      setTimeout(function() {
        $("#quiz-audio").trigger("play");
      }, 27000); 

      setTimeout(function() {
        $("#audio-13").trigger("play");
        $("#arrowteam").fadeIn();
      }, 35000); 

    

  });