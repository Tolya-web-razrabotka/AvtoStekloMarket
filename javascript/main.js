$(document).ready(function(){
$('.sliderTreeOsTrack').slick({
  		autoplay:false,
		autoplaySpeed:3500,
		slidesToShow:1,
		slidesToScroll:1,
		dots:true,
		swipeToSlide: true,
		variableWidth: true,
		arrows:false,
		infinite:true,
		speed:750,
		fade:true,
		easing:'easeInOutQuart',
		slide:'.slideTOT'
  });
});


// Яндекс карта
var $maps = $(".maps");

if ($maps.length > 0) {
    var center = [56.31548056841197, 44.015211999999906];

    $maps.each(function (index) {
        var uniqueId = "map-" + index;
        this.id = uniqueId;
    });

    function createMap(mapId) {
        var map = new ymaps.Map(mapId, {
            center: center,
            zoom: 12,
        });

        var placemark = new ymaps.Placemark(
            center,
            {},
            {
                iconLayout: "default#image",
                iconImageHref: "/images/svg/marker.svg",
                iconImageSize: [40, 40],
                iconImageOffset: [-19, -44],
            }
        );

        placemark.events.add("click", function () {
            var url = "https://yandex.ru/maps/-/CTT1Q01Q";
            window.open(url, "_blank");
        });

        map.controls.remove("geolocationControl");
        map.controls.remove("searchControl");
        map.controls.remove("trafficControl");
        map.controls.remove("typeSelector");
        map.controls.remove("fullscreenControl");
        map.controls.remove("zoomControl");
        map.controls.remove("rulerControl");

        map.geoObjects.add(placemark);
    }

    ymaps.ready(function () {
        $maps.each(function () {
            createMap(this.id);
        });
    });
}