$(function(){

  $('#goButton').click(illuminatedGreen);
  $('#stopButton').click(illuminatedRed);


  function illuminatedGreen(){
    console.log("calling switch light function");

    $("#goLight").toggleClass("green");
  }

  function illuminatedRed(){
    $("#stopLight").toggleClass("red-background")



  }








});
