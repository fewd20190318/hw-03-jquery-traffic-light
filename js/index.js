$(function(){
  console.log('ready!');


  function switchRed(){
    clearLights();
    $("#stopLight").css("background-color","red");
  }
  $("#stopButton").click(switchRed);

  function switchYellow(){
    clearLights();
    $("#slowLight").css("background-color","yellow");
  }
  $("#slowButton").click(switchYellow);

  function switchGreen (){
    clearLights();
    $("#goLight").css("background-color","green");
  }
  $("#goButton").click(switchGreen);

  function clearLights(){
    $(".bulb").css("background-color","black");
  }


});
