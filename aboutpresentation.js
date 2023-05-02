$(document).ready(function () {

    $("#audio-4")[0].play();

    setTimeout(function() {
        // place right of fox
        $("#arrow6").css({
            "top": $("#fox").offset().top + ($("#fox").height() / 2) - ($("#arrow1").height() / 2),
            "left": $("#fox").offset().left + $("#fox").width() - 1500,
            // display block
            "display": "block"
        });
        // place right of charactertitle
        $("#arrow7").css({
            "top": $("#characters-title").offset().top + ($("#characters-title").height() / 2) - ($("#arrow1").height() / 2),
            "left": $("#characters-title").offset().left + $("#characters-title").width() + 10,
            "display": "block"
        });
    }, 1000);
    
    setTimeout(function() {
        $("#audio-5")[0].play();
        $('html, body').animate({
            scrollTop: $("#characters-title").offset().top
        }, 2000);
    }, 15000);
    setTimeout(function() {
        // scroll to div named title
        $('html, body').animate({
            scrollTop: $("#fox").offset().top - ($(window).height() / 8)
        }, 2000);
    }, 30000);
    setTimeout(function() {
        $("#audio-6")[0].play();
    }, 35000);
        
});