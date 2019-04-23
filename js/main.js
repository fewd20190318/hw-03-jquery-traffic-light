$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);



function illuminateRed() {

  $("body").attr("class", "red");
}

function illuminateYellow() {

  $("body").attr("class", "yellow");
}

function illuminateGreen() {

  $("body").attr("class", "green");
}
