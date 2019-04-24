$(document).ready(function(){

  $("#stopButton").click(illuminateRed);
  $("#slowButton").click(illuminateYellow);
  $("#goButton").click(illuminateGreen);

  function illuminateRed(){
    console.log("calling function")
    $('#stopLight').css('background-color', 'red');
    // $('#slowLight').css('background-color', 'black');
    // $('#goLight').css('background-color', 'black');
  }

  function illuminateYellow(){
    console.log("calling function")
    $('#slowLight').css('background-color', 'yellow');
  }

  function illuminateGreen(){
    console.log("calling function")
    $('#goLight').css('background-color', 'green');
  }


});
