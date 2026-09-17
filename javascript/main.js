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