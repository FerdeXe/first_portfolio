
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


//  maps
ymaps.ready(function () {
  var map = new ymaps.Map('map', {
   center: [54.984245, 73.368820],
    zoom: 12,
      controls: ['zoomControl']

  }, {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
    maxZoom: 19,
    minZoom: 3,
    autoFitToViewport: 'always',
    avoidFractionalZoom: true,
   restrictMapArea: [
                  [54.975860, 73.268738],
                  [55.015374, 73.383422]
                ],
    //projection: new ymaps.projection.Cartesian([[-16384, 16384], [16384, -16384]], [false, false]),
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
    
  });

 


   map.geoObjects.add(new ymaps.Placemark([54.985343, 73.310846], {
    balloonContentHeader: "my office",
   
  }));

  // ������� ������������� ������� ����������
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      position: {
        top: 10,
        right: 10
      }
    }
  });

  // ��������� ������� ���������� �� �����
  map.controls.add(zoomControl);

 


  // ��������� ������� �� �����
  map.geoObjects.add(placemark);
});



function printPDF() {
  // URL PDF �����
 var pdfUrl = '/assets/pdf/Resume.pdf';
  
  // ��������� PDF ����
  pdfjsLib.getDocument(pdfUrl).then(function(pdf) {
    // �������� ������ �������� PDF �����
    pdf.getPage(1).then(function(page) {
      // ������� ������ ������
      var printOptions = {
        'documentTitle': 'Andreev Andrey',
        'autoPrint': true
      };
      
      // ��������� ���������� ���� ������
      page.getOperatorList().then(function() {
        pdf.print(printOptions);
      });
    });
  });
}

// ����������� ������� � ������
var printButton = document.getElementById('printResume');
printButton.addEventListener('click', printPDF);
