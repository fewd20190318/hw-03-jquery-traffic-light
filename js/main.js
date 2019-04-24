$(document).ready(function(){

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);
}

function illuminateRed(){
  $('body').attr('class', 'red');
}

function illuminateYellow(){
  $('body').attr('class', 'yellow');
}

function illuminateGreen(){
  $('body').attr('class', 'green');
}


  // Original JS -----
  // function clearLights() {
  //   document.getElementById('stopLight').style.backgroundColor = "black";
  //   document.getElementById('slowLight').style.backgroundColor = "black";
  //   document.getElementById('goLight').style.backgroundColor = "black";
  // }

// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('goButton').onclick = illuminateGreen;
//
// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }
//
// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }
//
// function illuminateYellow() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }
//
// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }
