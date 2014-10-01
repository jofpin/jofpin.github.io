/*! main js for my page | (c) Copyright 2014 - Jose Pino, @jofpin | */

$(function () {

	var sexyPreview = $(".sexy-preview-load");

// sexy load bam bam...
$(window).load(function() {
	sexyPreview.fadeIn(); 
	sexyPreview.queue(function(){ 
		setTimeout(function(){ 
			sexyPreview.dequeue(); 
			}, 2000);  // 2300
	});

	sexyPreview.fadeOut("slow"); 
});

});