$( document ).ready(function() {
    console.log( "ready!" );


    function traffic1(){
        clearLights();
       $("#stopLight").css("background-color", "red");
     }

    $("#stopButton").click(traffic1);

    function traffic2(){
      clearLights();
       $("#slowLight").css("background-color", "yellow");
     }

    $("#slowButton").click(traffic2);


    function traffic3(){
      clearLights();
       $("#goLight").css("background-color", "green");
     }

    $("#goButton").click(traffic3);


    function clearLights(){
       $("#stopLight").css("background-color", "black");
       $("#slowLight").css("background-color", "black");
       $("#goLight").css("background-color", "black");
     }

});
