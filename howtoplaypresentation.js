
  $(document).ready(function () {
  $(".circle").hide();
  $("#arrowlearn").hide();
  $("#tutorialbutton").click(function () {
    $("#audio-9").trigger("play");
    $("html, body").animate(
      {
        scrollTop: $("#play1").offset().top-200,
      },
      2000
    );

    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $("#play2").offset().top -200,
        },
        2000
      );
    }, 4000);
    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $("#play3").offset().top - 200,
        },
        2000
      );
    }, 9000);
    $(".circle").fadeIn().animate({ top: "650px" }, 2000);
    $(".circle").animate({ top: "1050px" }, 4000);
    $(".circle").animate({ top: "1450px" }, 9000);
    $(".circle").fadeOut(1000);

    setTimeout(function () {
      $("#audio-10").trigger("play");
      $("#arrowlearn").fadeIn();
      $("html, body").animate(
        {
          scrollTop:0
        },
        2000
      );
    }, 23000);
  });
});
$(document).ready(function () {
  
  $(".circle").hide();
  $("#arrowlearn").hide();
  $("#tutorialbutton").click(function () {
    $("#audio-9").trigger("play");
    $("html, body").animate(
      {
        scrollTop: $("#play1").offset().top-200,
      },
      2000
    );

    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $("#play2").offset().top -200,
        },
        2000
      );
    }, 4000);
    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $("#play3").offset().top - 200,
        },
        2000
      );
    }, 9000);
    $(".circle").fadeIn().animate({ top: "650px" }, 2000);
    $(".circle").animate({ top: "1050px" }, 4000);
    $(".circle").animate({ top: "1450px" }, 9000);
    $(".circle").fadeOut(1000);

    setTimeout(function () {
      $("#audio-10").trigger("play");
      $("#arrowlearn").fadeIn();
      $("html, body").animate(
        {
          scrollTop:0
        },
        2000
      );
    }, 23000);
  });
});

window.onload = function() {
  setTimeout(function() {
    var tutorialButton = document.getElementById("tutorialbutton");
    tutorialButton.style.animation = "blink 1s linear infinite";
    setTimeout(function() {
      tutorialButton.style.animation = "";
    }, 5000);
  }, 1000);
};
