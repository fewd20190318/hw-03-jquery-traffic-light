$(document).ready(function(){


$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);



function illuminateRed() {
  clearLights();
  $("body").attr("class", "red");
}

function illuminateYellow() {
  clearLights()
  $("body").attr("class", "yellow");
}

function illuminateGreen() {
  clearLights();
  $("body").attr("class", "green");
}


function clearLights() {
  $('body').attr("class", "black");
  $('body').attr("class", "black");
  $('body').attr("class", "black");
}

});
