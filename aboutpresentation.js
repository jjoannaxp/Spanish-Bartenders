$(document).ready(function () {

    $("#audio-4")[0].play();
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