
function illuminateRed(){
  clearLights();
  $("#stopLight").css("background-color","red");
 }

 $("#stopButton").click(illuminateRed);

 function illuminateYellow(){
   clearLights();
   $("#slowLight").css("background-color","yellow");
  }

  $("#slowButton").click(illuminateYellow);

  function illuminateGreen(){
    clearLights();
    $("#goLight").css("background-color","green");
   }

   $("#goButton").click(illuminateGreen);


 function clearLights(){
   $(".bulb").css("background-color","black");
 }
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
// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }
//
// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }
