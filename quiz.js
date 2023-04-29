$(document).ready(function() {
    $(".feedback").hide();
  
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
      var message = "You got " + numCorrect + " out of " + totalQuestions + " correct. Score: " + score.toFixed(2);
  
      var highestScore = localStorage.getItem('highestScore');
  
      if (highestScore == null || score > highestScore) {
        highestScore = score;
        localStorage.setItem('highestScore', highestScore);
        message += " (New high score!)";
      } else {
        message += " (High score: " + highestScore.toFixed(2) + ")";
      }
  
      alert(message);
    });
  });
  