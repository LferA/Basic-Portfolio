$(document).ready(function () {
    $(".button-collapse").sideNav();
  });

  $(".portfolio-button").on("click", function(){
    $(".welcome-panel").addClass("hidden");
    $(".portfolio-panel").removeClass("hidden");
  })

  $(".aboutMe-button").on("click", function(){
    $(".welcome-panel").removeClass("hidden");
    $(".portfolio-panel").addClass("hidden");
   
  })