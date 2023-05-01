$(document).ready(function () {

    $("#audio-4")[0].play();

    setTimeout(function() {
        $("#arrow6").css("display", "block");
        $("#arrow7").css("display", "block");
    }, 13000);
    
    setTimeout(function() {
        $("#audio-5")[0].play();
        $('html, body').animate({
            scrollTop: $("#characters-title").offset().top
        }, 2000);
    }, 15000);
    setTimeout(function() {
        // scroll to div named title
        $('html, body').animate({
            scrollTop: $("#fox").offset().top
        }, 2000);
    }, 30000);
        
});
