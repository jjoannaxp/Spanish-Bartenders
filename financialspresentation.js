$(document).ready(function () {

  $(".circle").hide();
  $("#tutorialbutton").click(function () {
  $("#business2").trigger("play");

  setTimeout(function () {
    $(".circle").fadeIn().animate({ "margin-left": "730px" }, 300);
  }, 6200);
  setTimeout(function() {
    window.location.href = "Presentation.html";
  }, 10000);

});

const tutorialButton = document.getElementById("tutorialbutton");

tutorialButton.addEventListener("click", function() {

$("#tutorialbutton").hide();
})
});