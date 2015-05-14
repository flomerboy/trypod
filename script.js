$(document).ready(function(){
   						// Height of window (visible part).

   	$(window).load(function(){
   		$("center#loading").hide();
   	})

	scrollHeight = $(window).scrollTop();
	headerHeight = $(window).height();
	console.log("headerHeight = " + headerHeight);

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
		// $("div.header").css("background-color","rgba(" + R + ", " + G + ", " + B + ", " + A + ")");
		// actualColor = $("div.header").css("background-color");
		// console.log(actualColor);
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

	//slick properties for the nexus "how the app works" thing
	$('.single-item').slick({
		autoplay: true,
		lazyLoad: 'ondemand',
		autoplaySpeed: 2000,
		pauseOnHover: true
	});

	// Click event for any anchor tag that's href starts with #
 	$('a[href^="#"]').click(function(event) {

    // The id of the section we want to go to.
    var id = $(this).attr("href");

    // An offset to push the content down from the top.
    var offset = 0;

    // Our scroll target : the top position of the
    // section that has the id referenced by our href.
    var target = $(id).offset().top - offset - 100;

    // The magic...smooth scrollin' goodness.
    $('html, body').animate({scrollTop:target}, 300);

    //prevent the page from jumping down to our section.
    event.preventDefault();
 });
});