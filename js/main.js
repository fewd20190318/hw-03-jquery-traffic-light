$(function(){

  function clearLights(){
    $(".button").css("backgroundColor", "black");
  }

  function illuminateRed(){
    $("#stopLight").css("backgroundColor", "red");
  }

  $("#stopButton").click(illuminateRed);
})
