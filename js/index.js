$(document).ready(function(){

$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);

function illuminateRed(){
  $("#stopLight").css("background-color", "red");
}

function illuminateYellow(){
  $("#slowLight").css("background-color", "yellow");
}

function illuminateGreen(){
  $("#goLight").css("background-color", "green");
}

});
