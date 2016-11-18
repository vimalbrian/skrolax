/*
* Skrolax,js
* author: Vimal Baltharaj
*/

var skrolax = {
	init:function(){
		$(window).on('load scroll', function(){
			$('.parallax').each(function(){
				this_elem = $(this);
				
				bgPos = $(this).css('background-position').split(' ');
				xPos = bgPos[0];
				
				if($(this).data('speed') <= 1.0){
					yPos = parseInt(($(this).offset().top-$(window).scrollTop())*$(this).data('speed'));
				}
				else{
					yPos = parseInt(($(this).offset().top-$(window).scrollTop())*1.0);
				}
				
				$(this).css('background-position', xPos+' '+yPos+'px');
			});
		});
	},
	scroll:function(){
	}
};


$(document).ready(function(){
	skrolax.init();
});
