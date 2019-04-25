$(document).ready(function(){

  $("#stopButton").click(illuminateRed);
  $("#slowButton").click(illuminateYellow);
  $("#goButton").click(illuminateGreen);

  function illuminateRed(){
    console.log("calling function")
    clearLights();
    $('#stopLight').css('background-color', 'red');

    // $('#slowLight').css('background-color', 'black');
    // $('#goLight').css('background-color', 'black');
  }

  function illuminateYellow(){
    console.log("calling function")
    clearLights();
    $('#slowLight').css('background-color', 'yellow');
  }

  function illuminateGreen(){
    console.log("calling function")
    clearLights();
    $('#goLight').css('background-color', 'green');
  }

  function clearLights(){
    $('#stopLight').css('background-color', 'black');
    $('#slowLight').css('background-color', 'black');
    $('#goLight').css('background-color', 'black');
  }

});
