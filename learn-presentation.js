$(document).ready(function() {

     $(".circle").hide();
     $("#arrowteam").hide();
    
      $("#audio-11").trigger("play");
        
      
      setTimeout(function() {
        $("#audio-12").trigger("play");
        $('html, body').animate({
          scrollTop: $("#levelgroup").offset().top - 200
        }, 2000)
      }, 11000); 

      setTimeout(function() {
        
      }, 25000); 

      setTimeout(function() {
        $("#quiz-audio").trigger("play");
      }, 27000); 

      setTimeout(function() {
        $("#audio-13").trigger("play");
          $('html, body').animate({
            scrollTop: 0
          }, 2000)
        $("#arrowteam").fadeIn();
      }, 35000); 
      const tutorialButton = document.getElementById("tutorialbutton");

      tutorialButton.addEventListener("click", function() {
    
      $("#tutorialbutton").hide();
    });
    

  });