$('stopButton').click(illuminateRed);
$('slowButton').click(illuminateYellow);
$('goButton').click(illuminateGreen);



function illuminateRed() {
  clearLights();
  $('stopLight').style.backgroundColor = "red";
}

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }
//
// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }


function clearLights(){
  $('stopLight').stlye.backgroundColor ="black";



}
