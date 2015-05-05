$(document).ready(function(){
   						// Height of window (visible part).
	scrollHeight = $(window).scrollTop();
	headerHeight = $('div.header').height();

	function map_range(value, low1, high1, low2, high2) {
    	return Math.floor(low2 + (high2 - low2) * (value - low1) / (high1 - low1));
	};

	function map_range_decimal(value, low1, high1, low2, high2) {
    	return (low2 + (high2 - low2) * (value - low1) / (high1 - low1));
	};

	readHeight = function(){      					// Height of window (visible part).
		scrollHeight = $(window).scrollTop();			//this value starts high and ends low
		console.log("scrollHeight = " + scrollHeight);
		R = map_range(scrollHeight, 0, headerHeight, 83, 33);
		G = map_range(scrollHeight, 0, headerHeight, 200, 150);
		B = map_range(scrollHeight, 0, headerHeight, 255, 243);
		A = map_range_decimal(scrollHeight, 0, headerHeight, 0, 1);
		console.log("RGB = ("  + R + ", " + G + ", " + B + ", " + A +")");	
	};

	draw = function(){
		$("div.header").css("background-color","rgba(" + R + ", " + G + ", " + B + ", " + A + ")");
		actualColor = $("div.header").css("background-color");
		console.log(actualColor);
		if (scrollHeight>headerHeight) {
			$("ul#nav").css("position","fixed");
			$("ul#nav").css("background-color","rgba(33,150,243,.9)");
			$("li ul").css("background-color","rgba(33,150,243,.9)");
			console.log("nav");
		} else {
			$("ul#nav").css("position","absolute");
			$("ul#nav").css("background-color","rgba(0,0,0,0)");
			$("li ul").css("background-color","rgba(0,0,0,0)");
		}
	};
	
	readHeight();
	draw();

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