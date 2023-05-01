$(document).ready(function () {
  $("#arrowdownload").hide();
  $("#tutorialbutton").click(function () {
    $("#audio-14").trigger("play");
    setTimeout(function () {
      $("#audio-15").trigger("play");
      $('html, body').animate({
        scrollTop: $('.pictures').offset().top -100
    }, 2000);
    }, 9000);


    setTimeout(function () {
      $("#dani").css("border", "10px white solid");
      $("#shailee").css("border", "10px white solid");
    }, 10000);

    setTimeout(function () {
      $("#dani").css("border", "none");
      $("#shailee").css("border", "none");
      $("#joey").css("border", "10px white solid");
    }, 12000);

    setTimeout(function () {
      $("#joey").css("border", "none");
      $("#louis").css("border", "10px white solid");
      $("#zac").css("border", "10px white solid");
    }, 15000);

    setTimeout(function () {
      $("#zac").css("border", "none");
      $("#louis").css("border", "none");
      $("#yeji").css("border", "10px white solid");
    }, 17000);
    setTimeout(function () {
      $("#yeji").css("border", "none");
    }, 19000);
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    }, 20000);

    setTimeout(function () {
      $("#audio-16").trigger("play");
      $("#arrowdownload").fadeIn();
    }, 19000);
  });
});
