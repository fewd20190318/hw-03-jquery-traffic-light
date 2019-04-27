$(function(){

  $('#goButton').click(illuminatedGreen);
  $('#stopButton').click(illuminatedRed);
  $("#slowButton").click(illuminatedYellow);


  function illuminatedGreen(){
    $("#goLight").toggleClass("green");
  }

  function illuminatedRed(){
    $("#stopLight").toggleClass("red-background");
  }

  function  illuminatedYellow(){
    $("#slowLight").toggleClass("yellow-background");

  }







});
