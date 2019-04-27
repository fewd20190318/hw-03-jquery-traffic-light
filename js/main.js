$(function(){

  $('#goButton').click(illuminatedGreen);


  function illuminatedGreen(){
    console.log("calling switch light function");

    $("#goLight").toggleClass("green");
  }
});
