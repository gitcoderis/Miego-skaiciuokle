
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
       $('#btn-skaiciuoti').removeClass('disabled');
      // if(result<0) {
      //   result = result+60;
      //   console.log(result);
      // }
      // console.log(result);
    }
});

$('#btn-skaiciuoti').click(function(){
  if($('#btn-skaiciuoti').hasClass('disabled')){

    console.log('Mygtukas neaktyvus. Pasirinkite kitą laiką');
  } else {
    $('#rezultatas').empty();
    kadaMiegoti();
    $('#rezultatas').prepend("<p>Kad atsikeltumėte žvalesni norimu laiku, miegoti reikėtų eiti vienu iš šių laikų:</p>");
    $('#rezultatas').append("<p style='margin-top:20px;'>Skaičiuoklė atsižvelgia į tai, jog atsigulus, užmigti trunka vidutiniškai 15 minučių.<br>Siekiant geriau jaustis atsibudus, reikėtų stengtis prabusti tarp miego ciklų, kurių kiekvienas trunka 90&nbsp;minučių. </p>");

    $('#btn-skaiciuoti').addClass('disabled');
  }

});



});


var kadaMiegoti = function(){


  minutes-=15;
  for (var i = 0; i < 6; i++) {
    minutes -= 90; //miego intervalas

    if(minutes < 0) {
      minutes += 60;
      valandos--;
      if(minutes < 0) {
        minutes += 60;
        valandos--;
      }
      //jei valandos neigiamos, perdaro i 24 valandu formata
      if(valandos < 0) {
        valandos += 24;
      }


      ////////skaciuoja, kiek valandu is viso bus miegota//////////////
      // var visoMiego = 90*(i+1);
      // var miegoVal = Math.floor(visoMiego/60);
      // var miegoMin = visoMiego % 60;
      //
      // console.log(visoMiego, miegoVal+":"+miegoMin);
      //////////////////////////////////////////////////////////////////

      //perdaro 7:9 i 07:09
      if(valandos<10){
        valandos = '0'+valandos;
      }
      if(minutes<10){
        minutes = '0'+minutes;
      }
      $('#rezultatas').prepend("<h1><i class='material-icons'>schedule</i> "+valandos+":"+minutes+"</h1>");
      $('h1:nth-child(3)').css('opacity', i/10+.2);
      console.log(valandos+":"+minutes);
    }
  }

  console.log('---');
};
