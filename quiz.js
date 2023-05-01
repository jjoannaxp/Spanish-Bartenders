$(document).ready(function() {
  $(".feedback").hide();
  $("#highscore").hide();
  
  $("#button1").click(function(event) {
    event.preventDefault();
    var numCorrect = 0;
    var totalQuestions = 0;

    $("#quiz-form div[id^='q']").each(function() {
      var question = $(this);
      var answer = question.find("input[type='radio']:checked").val();
      var correct = question.find(".feedback[data-answer='" + answer + "']");

      if (correct.length > 0) {
        numCorrect++;
      }

      totalQuestions++;
    });

    var score = numCorrect / totalQuestions * 100;
    var message = "You got " + numCorrect + " out of " + totalQuestions + " correct. Score: " + score.toFixed(2) + "%";

    var highestScore = localStorage.getItem('highestScore');

    if (highestScore == null || score > highestScore) {
      highestScore = score;
      localStorage.setItem('highestScore', highestScore);
      message += " (New high score!)";
      
      $("#highscore").show();


      setTimeout(function() {
        $("#highscore").hide();
      }, 1000);

    var angle = 5;
var rotate = function() {
  $("#highscore").css({
    "-webkit-transform": "rotate(" + angle + "deg)",
    "-moz-transform": "rotate(" + angle + "deg)",
    "-o-transform": "rotate(" + angle + "deg)",
    "-ms-transform": "rotate(" + angle + "deg)",
    "transform": "rotate(" + angle + "deg)"
  });

  angle = -angle;

  if (angle == 5) {
    setTimeout(function() {
      $("#highscore").css({
        "-webkit-transform": "none",
        "-moz-transform": "none",
        "-o-transform": "none",
        "-ms-transform": "none",
        "transform": "none"
      });
    }, 100);
  } else {
    setTimeout(rotate, 600);
  }
};

rotate();


    } else {
      highestScore = parseInt(highestScore);
      message += " (High score: " + highestScore.toFixed(2) + "%)";
    }


    alert(message);
  });
  $("#largeDiv").hide();
  $("#close").click(function(event) {
    $("#largeDiv").hide();
    $("#popup").show();
  });

  $("#popup").click(function(event) {
    $("#largeDiv").show();
    $("#popup").hide();
  });
});
