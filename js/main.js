$(function(){

// When any button is clicked, change the background color of all bulbs to black.
  function clearLights(){
    $(".bulb").css("backgroundColor", "black");
  }

  $(".button").click(clearLights);

// When stopButton is clicked, change the background color of the stopLight to red.
  function illuminateRed(){
    $("#stopLight").css("backgroundColor", "red");
  }

  $("#stopButton").click(illuminateRed);

// When slowButton is clicked, change the background color of the slowLight to yellow.
  function illuminateYellow(){
    $("#slowLight").css("backgroundColor", "yellow");
  }

  $("#slowButton").click(illuminateYellow);

// When goButton is clicked, change the background color of the goLight to green.
  function illuminateGreen(){
    $("#goLight").css("backgroundColor", "green");
  }

  $("#goButton").click(illuminateGreen);

})
