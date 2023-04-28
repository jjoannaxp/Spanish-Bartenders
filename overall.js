$(document).ready(function () {
  const theme = $('.theme');
  const indiv = $('.individualtheme');
  const modeButton = $("#modebutton");
  let currentMode = localStorage.getItem("mode");
  console.log(currentMode + " = curent")
  setStyles(currentMode);

  $("#dark").click(function(){
    setStyles("dark");
  });

  $("#light").click(function(){
    setStyles("light");
  });

  function setStyles(mode) {
     currentMode = localStorage.getItem("mode");
    
   
    if ((mode == "dark" && currentMode == "light" ||mode == "dark" )) {
      theme.attr('href', 'overall-darkmode.css');
      indiv.each(function() {
        const href = $(this).attr('href').replace('.css', '-dark.css');
        $(this).attr('href', href);
      });
      modeButton.html("Dark Mode <img src='assets/chevron-black-down.png' id='dropdown-chevron'>");
      localStorage.setItem("mode", "dark");
    } else if((mode == "light" && currentMode == "dark")|| currentMode == null || mode == "light") {
      theme.attr('href', 'overall.css');
      indiv.each(function() {
        const href = $(this).attr('href').replace('-dark.css', '.css');
        $(this).attr('href', href);
      });
      modeButton.html("Light Mode <img src='assets/chevron-black-down.png' id='dropdown-chevron'>");
      localStorage.setItem("mode", "light");
    }
    console.log(currentMode);
  }

  $("li >a").hover(function(){
    let green = "rgb(51, 75, 41)";
    let redbrown = "rgb(109, 30, 21)";
    if($(this).css("color") == green){
      console.log("cp;pr");
      $(this).css("color", redbrown);
    }  if($(this).css("color") == redbrown){
      console.log("lll");
      $(this).css("color",green);
    }
      
  })
});