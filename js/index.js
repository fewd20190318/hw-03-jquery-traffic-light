// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

  function stopButton(){
  clearLights();
  $("#stopLight").css("background-color", "red");
}

$("#stopButton").click(stopButton);

function slowButton(){
  clearLights();
  $("#slowLight").css("background-color", "yellow");
}

$("#slowButton").click(slowButton);

function goButton(){
  clearLights();
$("#goLight").css("background-color", "green");
}

$("#goButton").click(goButton);

function clearLights() {
$("#stopLight").css("background-color", "black" )
$("#slowLight").css("background-color", "black" )
$("#goLight").css("background-color", "black" )
}


});
