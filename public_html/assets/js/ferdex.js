
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
ymaps.ready(function () {
  var map = new ymaps.Map('map', {
    center: [40.674, -73.945],
    zoom: 12,
    controls: ['zoomControl']
  }, {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
    maxZoom: 19,
    minZoom: 3,
    autoFitToViewport: 'always',
    avoidFractionalZoom: true,
    restrictMapArea: [[-90, -180], [90, 180]],
    projection: new ymaps.projection.Cartesian([[-16384, 16384], [16384, -16384]], [false, false]),
    behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
    type: 'yandex#map',
    cursor: 'pointer',
    autoCursor: true,
    margin: [0, 0, 0, 0],
    autoSwitchBehavior: true,
    pixelRatio: 1,
    zoomMargin: 0,
    mapAutoPan: true,
    mapAutoFocus: true,
    suppressObsoleteBrowserNotifier: true,
    suppressMapOpenBlock: true,
    geoObjects: new ymaps.GeoObjectCollection(null, {
      preset: 'islands#blueIcon',
    })
  });

  // Создаем стилизованные объекты управления
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      position: {
        top: 10,
        right: 10
      }
    }
  });

  // Добавляем объекты управления на карту
  map.controls.add(zoomControl);

  // Создаем объекты на карте
  var placemark = new ymaps.Placemark([40.674, -73.945], {
    balloonContent: 'Наш офис',
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'https://yastatic.net/s3/mapsapi-icons-collection/2.1.1/icons/54.geoobject.svg',
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -16],
    hideIconOnBalloonOpen: false,
  });

  // Добавляем объекты на карту
  map.geoObjects.add(placemark);
});
