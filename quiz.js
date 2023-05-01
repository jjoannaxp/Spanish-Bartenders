$(document).ready(function() {
    $('.feedback').hide();
    $('input[type=radio]').change(function() {
        var questionContainer = $(this).closest('div');
        var selected = questionContainer.find('input[type=radio]:checked').val();
        if(selected == 'b') {
            questionContainer.find('.feedback[data-answer="b"]').fadeIn();
            questionContainer.find('.feedback[data-answer="a,c"]').fadeOut();
        } else {
            questionContainer.find('.feedback[data-answer="b"]').fadeOut();
            questionContainer.find('.feedback[data-answer="a,c"]').fadeIn();
        }
        var questionContainer = $(this).closest('div');
        var selected = questionContainer.find('input[type=radio]:checked').val();
        if(selected == 'c') {
            questionContainer.find('.feedback[data-answer="c"]').fadeIn();
            questionContainer.find('.feedback[data-answer="a,b"]').fadeOut();
        } else {
            questionContainer.find('.feedback[data-answer="c"]').fadeOut();
            questionContainer.find('.feedback[data-answer="a,b"]').fadeIn();
        }
        var questionContainer = $(this).closest('div');
        var selected = questionContainer.find('input[type=radio]:checked').val();
        if(selected == 'a') {
            questionContainer.find('.feedback[data-answer="a"]').fadeIn();
            questionContainer.find('.feedback[data-answer="b,c"]').fadeOut();
        } else {
            questionContainer.find('.feedback[data-answer="a"]').fadeOut();
            questionContainer.find('.feedback[data-answer="b,c"]').fadeIn();
        }
        $('#popup-message').click(function() {
            console.log("clicked");
            $('#largeDiv').css('display', 'block');
          
            $("#popup-message").on("click", function () {
              $("#largeDiv").addClass("show");
            });
          
            $("#close").on("click", function () {
              $("#largeDiv").removeClass("show");

        
            });
          });
        
    });
    
  });
