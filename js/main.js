$(function(){

  $('#goButton').click(illuminatedGreen);
  $('#stopButton').click(illuminatedRed);
  $("#slowButton").click(illuminatedYellow);


  function illuminatedGreen(){
  //    clearLights();
      $("#goLight").addClass("green-background");
  }

  function illuminatedRed(){
  //  clearLights();
    $("#stopLight").addClass("red-background");
  }

  function  illuminatedYellow(){
  //  clearLights();
    $("#slowLight").addClass("yellow-background");
  }

/*
  function  clearLights(){
    console.log("am i working?");
    $("#slowLight").addClass("black-background");
    $("#stopLight").addClass("black-background");
    $("#goLight").addClass("black-background");

  }

*/




});
