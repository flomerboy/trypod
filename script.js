$(document).ready(function(){
   						// Height of window (visible part).
	scrollHeight = $(window).scrollTop();
	headerHeight = $('div.header').height();

	function map_range(value, low1, high1, low2, high2) {
    	return Math.floor(low2 + (high2 - low2) * (value - low1) / (high1 - low1));
	};

	readHeight = function(){      					// Height of window (visible part).
		scrollHeight = $(window).scrollTop();			//this value starts high and ends low
		console.log("scrollHeight = " + scrollHeight);
		R = map_range(scrollHeight, 0, headerHeight, 0, 100);
		G = map_range(scrollHeight, 0, headerHeight, 133, 165);
		B = map_range(scrollHeight, 0, headerHeight, 200, 250);
		console.log("RGB = ("  + R + ", " + G + ", " + B + ")");	
	};

	draw = function(){
		$("div.header").css("background-color","rgb(" + R + ", " + G + ", " + B + ")");
		actualColor = $("div.header").css("background-color	");
		console.log(actualColor);
	};
	
	readHeight;
	draw;

	$(document).scroll(function(){
		readHeight();
		draw();
	});

	$('.single-item').slick({
		autoplay: true,
		lazyLoad: 'ondemand',
		autoplaySpeed: 2000
	});
});