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

	};

	draw = function(){

			$("ul#nav").css("position","fixed");
			$("ul#nav").css("background-color","rgba(33,150,243,.9)");
			$("li ul").css("background-color","rgba(33,150,243,.9)");
	}
	
	readHeight();
	draw();

	$(document).scroll(function(){
		readHeight();
		draw();
	});

	$(window).load(function(){
   		$("center#loading").hide();
   	})

	//slick properties for the nexus "how the app works" thing
	$('.single-item').slick({
		autoplay: true,
		lazyLoad: 'ondemand',
		autoplaySpeed: 2000
	});

	$('#internetShopping').click(function() {
		$("#internetList").toggle("slow");
	});

	$('#hardwareStoreShopping').click(function() {
		$("#hardwareStoreList").toggle("slow");
	});

	$('#assemblyInstructions').click(function() {
		$("#assemblyInstructionsList").toggle("slow");
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