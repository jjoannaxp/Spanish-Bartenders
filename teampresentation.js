$(document).ready(function () {
  $("#arrowdownload").hide();

  $("#tutorialbutton").click(function () {
    $("#audio-14")[0].play();
    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $("#dani").offset().top - $(window).height() / 8,
        },
        2000
      );
    }, 5000);

    setTimeout(function () {
      $("#audio-15")[0].play();
    }, 9000);

    setTimeout(function () {
      $("#dani").css("border", "10px white solid");
      $("#shailee").css("border", "10px white solid");
    }, 10000);

    setTimeout(function () {
      $("#dani").css("border", "none");
      $("#shailee").css("border", "none");
      $("#joey").css("border", "10px white solid");
    }, 14000);

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
    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    }, 20000);

    setTimeout(function () {
      $("#audio-16")[0].play();
      $("#arrowdownload").fadeIn();
    }, 19000);
    setTimeout(function() {
      window.location.href = "download-presentation.html";
    }, 28000);
    const tutorialButton = document.getElementById("tutorialbutton");

    tutorialButton.addEventListener("click", function () {
      $("#tutorialbutton").hide();
    });
  });
});
