
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
    $("#tutorialbutton").hide();
    setTimeout(function() {
      window.location.href = "learn-presentation.html";
    }, 30000);
  });
  const tutorialButton = document.getElementById("tutorialbutton");

  tutorialButton.addEventListener("click", function() {

  $("#tutorialbutton").hide();
});
});

