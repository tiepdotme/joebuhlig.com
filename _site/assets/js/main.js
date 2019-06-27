$(document).ready(function(){
	var topOfContent = $(".page-content").offset().top;
	var windowHeight = $(window).height();
	displayImages(windowHeight);
	$('.menu-icon').click(function(event){
		event.preventDefault();
		$('.trigger').toggleClass('active');
	});
	$('.page-content').click(function(event){
		$('.trigger').removeClass('active');
		$(".right-nav .search-form").slideUp(300, function(){$("#search-icon").fadeIn(100)});
	})
	$('.post img').not('.featured-image').click(function(event){
		window.location.href = $(this).attr("src");
	})
	$(window).scroll(function() {
    var imageTrigger = windowHeight + $(window).scrollTop();
    displayImages(imageTrigger);
	});
	$(".menu-icon").click(function(e){
		e.preventDefault();
		$(".site-nav").toggleClass("menu-toggled");
	});
	$("#search-icon").click(function(e){
		e.preventDefault();
		$(this).fadeOut(100);
		$(".right-nav .search-form").slideDown(300);
		$(".right-nav .search-form .search-box").focus();
	});
});
function displayImages(loc){
	var imgs = $(".feed-pic .hidden");
	for (var i = 0; i<imgs.length; i++){
		if (imgs[i].offsetTop < (loc - 50)){
			$(imgs[i]).fadeOut(0, function(){
				$(this).attr("src", $(imgs[i]).attr("data-src")).fadeIn(600);
			    $(imgs[i]).attr("data-src", "");
			    $(imgs[i]).removeClass("hidden");
			    $(imgs[i]).addClass("visible");
		    });
		}
		else{
			return;
		}
	}
}
