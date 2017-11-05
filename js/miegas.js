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
});
