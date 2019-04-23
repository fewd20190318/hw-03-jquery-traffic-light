$(function() {
    console.log("ready!");

    //Listen for a click event for each button
    $("#stopButton").click(illuminateRed);
    $("#slowButton").click(illuminateYellow);
    $("#goButton").click(illuminateGreen);

    //Functions that turn on bulbs for the Stop Light
    function illuminateRed() {
      clearLights();
      $("#stopLight").css("background-color","red");
    }

    function illuminateYellow() {
      clearLights();
      $("#slowLight").css("background-color","yellow");
    }

    function illuminateGreen() {
      clearLights();
      $("#goLight").css("background-color","green");
    }

    //Function to turn off all bulbs for the Stop Light
    function clearLights() {
      $("#stopLight").css("background-color","black");
      $("#slowLight").css("background-color","black");
      $("#goLight").css("background-color","black");
    }
});
