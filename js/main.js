function two(a) {
    return (9 < a ? "" : "0") + a
}
function formatTime(a) {
    a = Math.floor(a / 1E3);
    var b = Math.floor(a / 60),
        c = Math.floor(b / 60),
        d = c / 24 | 0,
        c = c % 24;
    a %= 60;
    b %= 60;
    return "<div class='item'><b>"+"0"+d + "</b><span>дней</span></div><div class='item'><b>" + two(c) + "</b><span>часов</span></div><div class='item'><b>" + two(b) + "</b><span>минут</span></div><div class='item item-sec'><b>" + two(a) + "</b><span>секунд</span></div>";
};

// функция для склонения слов ( (1)"день", (2)"дня", (5)"дней")

function plural(str1,str2,str5){
  return function ( n ) {return ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))}
  }

var days =  plural('день', 'дня', 'дней'),
    hours = plural('час', 'часа', 'часов'),
    minutes = plural('минута', 'минуты', 'минут'),
    seconds = plural('секунда', 'секунды', 'секунд');

function Time() {
    var data = Date.parse('02/01/2014') // дата начала 1 шестидневки  строго "месяц/день/год"
    data = new Date(data);
    data.setMinutes((-180 - data.getTimezoneOffset()), 0, 0); //для коррекции   запустить в зоне акции alert((new Date).getTimezoneOffset()) и поменять число
    for (; (new Date).getTime() > data; )  {
    data.setDate(data.getDate()+7)//через сутки +1 , через 6 дней +6 
    }
    var a = data.getTime() -  (new Date).getTime();
    document.getElementById("show_timer").innerHTML = formatTime(a);
    window.setTimeout(Time, 1E3)
};
Time();


$(document).ready(function(){
  $('.slider-reviews').slick({dots:true});
  $('.slider-partners').slick({dots:false});
  $('.slider-customers').slick({dots:false});

  $('.i_phone').mask('+7 (999) 999-99-99');


  $("#actions .select .inn p").on('click', function(e) {
    e.preventDefault();
    $("#actions .select .inn p").removeClass('active');
    $(this).addClass('active');
  });



  $("nav .pull").on('click', function(e) {
    e.preventDefault();
    $("nav ul").slideToggle();
  });

  $(".btn-call").on('click', function(e) {
    e.preventDefault();
    $('#window-callback').arcticmodal();
  });


  $(".btn-hello").on('click', function(e) {
    e.preventDefault();
    $('#window-hello').arcticmodal();
  });

  $(".btn-detail-1").on('click', function(e) {
    e.preventDefault();
    $('#window-detail-1').arcticmodal();
  });

  $(".btn-detail-2").on('click', function(e) {
    e.preventDefault();
    $('#window-detail-2').arcticmodal();
  });

  $(".btn-win-1").on('click', function(e) {
    e.preventDefault();
    $('#window-win-1').arcticmodal();
  });

  $(".btn-win-2").on('click', function(e) {
    e.preventDefault();
    $('#window-win-2').arcticmodal();
  });

  $(".btn-win-3").on('click', function(e) {
    e.preventDefault();
    $('#window-win-3').arcticmodal();
  });

  $("#tariffs table tr:first-child").on('click', function(e) {
    e.preventDefault();
    $('#tariffs table.not').show();
  });

  $("#how-work .filters a").on('click', function(e) {
    e.preventDefault();
    $("#how-work .filters a").removeClass('active');
    $(this).addClass('active');
    $(".tab-1,.tab-2").hide();
    $("."+$(this).attr('data-tab')).show();
  });



  $('header nav a[href^="#"],#reviews .reviews .center a[href^="#"],.sc a[href^="#"],a[href^="#"].sc').click(function(){
      var el = $(this).attr('href');
      $('html,body').animate({
          scrollTop: $(el).offset().top}, 1000);
      return false; 
  });

  //$('.circlestat').circliful();
  $(".circlestat").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 25,
      backgroundBorderWidth: 25,
      percent: 53,
      textSize: 30,
      percentageTextSize: 30,
      fontColor: '#078ec1',
      textColor: '#078ec1',
  });

});



var target = $('#winner');
var targetPos = target.offset().top;
var winHeight = $(window).scrollTop();
var scrollToElem = targetPos - winHeight;


//alert(targetPos+' '+winHeight+' '+scrollToElem);

$(window).scroll(function(){
  var winScrollTop = $(window).scrollTop();
  if(scrollToElem <= 0){
    //$('.circlestat').circliful();
    //alert('a');
  }
});



function initialize(){
    var latlng = new google.maps.LatLng(59.9899767, 30.2419725);
    var myOptions = {
        zoom: 16,
        center: latlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),myOptions);
    setMarkers(map, places);
}

var places = [['Контактная информация',59.9899767, 30.2419725]];

function setMarkers(map, locations){
    var latlngbounds = new google.maps.LatLngBounds();
    var infoWindow = new google.maps.InfoWindow;
    var onMarkerClick = function(){
    var marker = this;
    var latLng = marker.getPosition();

    infoWindow.setContent(this.content.toString());
    infoWindow.open(map, marker);
};

google.maps.event.addListener(map, 'click', function(){
    infoWindow.close();
});

for (var i = 0; i < places.length; i++){
    var myLatLng = new google.maps.LatLng(59.9899767, 30.2419725);
    var image = new google.maps.MarkerImage('img/ml.png',
        new google.maps.Size(40, 40),
        new google.maps.Point(0,0),
        new google.maps.Point(60, 0));
        latlngbounds.extend(myLatLng);
        var address_content = '<p class="map_style">г. Санкт-Петербург, Приморский район, Мебельная, 12 к1 лит А БЦ Авиатор 3 этаж</p>';
        var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                content: address_content,
                title: locations[i][0]
        });

        google.maps.event.addListener(marker, 'click', onMarkerClick);
    }
};

initialize();


function closeModal(){
    $('#window-thanks').arcticmodal('close');
}


function sendForm(form_id) {
    var msg = $('#'+form_id).serialize();

    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: msg,
      success: function(data){
        if (form_id=="form_callback"){$('#window-callback').arcticmodal('close');$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id=="form_hello"){$('#window-hello').arcticmodal('close');$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id!="form_callback" && form_id!="form_hello") $('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);
        jQuery("#"+form_id).trigger("reset");
      },
      error:  function(xhr, str){
        if (form_id=="form_callback"){$('#window-callback').arcticmodal('close');$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id=="form_hello"){$('#window-hello').arcticmodal('close');$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id!="form_callback" && form_id!="form_hello") $('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);
        jQuery("#"+form_id).trigger("reset");
      }
    });
}