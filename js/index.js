$(document).ready(function(){


  function switchRed (){
    clearLights ();
    $('#stopLight').attr('class', 'bulb red');
  }
  $('#stopButton').click(switchRed);


  function switchYellow (){
    clearLights ();
    $('#slowLight').attr('class', 'bulb yellow');
  }
  $('#slowButton').click(switchYellow);


  function switchGreen (){
    clearLights ();
    $('#goLight').attr('class', 'bulb green');
  }
  $('#goButton').click(switchGreen);

  function clearLights (){
    $('#stopLight').attr('class', 'bulb')
    $('#slowLight').attr('class', 'bulb')
    $('#goLight').attr('class', 'bulb')
  }



  });
