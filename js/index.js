$(function() {
    console.log("ready!");

    //Listen for a click event for each bulb
    $("#stopButton").click(illuminateRed);
    $("#slowButton").click(illuminateYellow);
    $("#goButton").click(illuminateGreen);

    //Functions that turn on bulbs for the Stop Light
    function illuminateRed() {
      $("#stopLight").css("background-color","red");
    }

    function illuminateYellow() {
      $("#slowLight").css("background-color","yellow");
    }

    function illuminateGreen() {
      $("#goLight").css("background-color","green");
    }

});
