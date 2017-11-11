
var valandos;
var minutes;

$(document).ready(function(){
  // var inputas = $('#inputas');
  var posY,
      posX;

  var randomNr = function(){
    posY = Math.floor(Math.random() * 1000) + 60;
    posX = Math.floor(Math.random() * 1920);
  };


  // $('#inputas').clone().appendTo('body');

  for(var i = 0; i < 50; i++){
    $('.zvaigzdutes-konteineris:first').clone().css({"bottom": posY, "right": posX}).appendTo('.zvaigzdetasDangus');
    randomNr();
   }


   $('.timepicker').timepicker({
    timeFormat: 'HH:mm',
    interval: 60,
    minTime: '0',
    maxTime: '23:59:59',
    defaultTime: '07:00',
    startTime: '06:00',
    dynamic: true,
    dropdown: true,
    scrollbar: true,
    change: function(time){
      valandos = time.getHours();
      minutes = time.getMinutes();
      var result = valandos+":"+minutes;
      console.log(result);
    }
});





});


var arVeikiaDb = function(){
  var inputoReiksme = document.getElementById('inputas').value;

  var result = valandos+":"+minutes;
  console.log(result);
};
