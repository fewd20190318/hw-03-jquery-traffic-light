$(document).ready(function(){


$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);



function illuminateRed(red) {
  clearLights();
  $("stopButton").attr("class", "red");
}

function illuminateYellow() {
  clearLights()
  $("slowLight").attr("class", "yellow");
}

function illuminateGreen() {
  clearLights();
  $("goButton").attr("class", "green");
}


function clearLights() {
  $('body').attr("class", "black");
  $('body').attr("class", "black");
  $('body').attr("class", "black");
}

});
