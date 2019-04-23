$(function() {
    console.log("ready!");

    //Listen for a click event for each bulb
    $("#stopButton").click(illuminateRed);

    //Functions that turn on bulbs for the stopLight
    function illuminateRed() {
      $("#stopLight").css("background-color","red");
    }
});
