$(document).ready(function() {
    $("#tutorialbutton").click(function() {
       $("#audio-1").trigger("play");
      $("#arrow1").delay(7000);
      $("#arrow1").animate({top: "60px"}, 500);
      setTimeout(function() {
        $("#audio-2").trigger("play");
      }, 7500);
      setTimeout(function() {
        $("#circle").css("display", "block");
    }, 33000);
    setTimeout(function() {
      $("#audio-3").trigger("play");
    }, 30000);
    setTimeout(function() {
      $("#aboutaudio").trigger("play");
    }, 38000);
    setTimeout(function() {
      $("#arrow2").animate({top: "60px"}, 500);
    }, 38000);
    });

    $("about-page").click(function(){
      $("#audio-4").trigger("play");
      setTimeout(function(){
        $("#audio-5").trigger("play");
      },13000)
      
    })
  });

  
  //   <audio id="audio-5" class="audio">
  //   <source src="audios/audio5.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-6" class="audio">
  //   <source src="audios/audio6.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-8" class="audio">
  //   <source src="audios/audio8.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-9" class="audio">
  //   <source src="audios/audio9.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-10" class="audio">
  //   <source src="audios/audio10.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-11" class="audio">
  //   <source src="audios/audio11.mp3" type="audio/mp3">
  // </audio>

  // <audio id="audio-12" class="audio">
  //   <source src="audios/audio12.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-13" class="audio">
  //   <source src="audios/audio13.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-14" class="audio">
  //   <source src="audios/audio14.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-15" class="audio">
  //   <source src="audios/audio15.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-16" class="audio">
  //   <source src="audios/audio16.mp3" type="audio/mp3">
  // </audio>
  // <audio id="audio-17" class="audio">
  //   <source src="audios/audio17.mp3" type="audio/mp3">
  // </audio>