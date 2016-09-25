if (getCookie("theme") == "light"){
	$('html').removeClass("dark");
}

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
	})
	$('.post img').not('.featured-image').click(function(event){
		window.location.href = $(this).attr("src");
	})

	$(window).scroll(function() {
        var windowScrollPosition = $(window).scrollTop();
        var imageTrigger = windowHeight + windowScrollPosition;
    	displayImages(imageTrigger);
	});
	$(".menu-icon").click(function(e){
		e.preventDefault();
		$(".site-nav").toggleClass("menu-toggled");
	})
	$(".theme-toggle").click(function(e){
		e.preventDefault();
		$('html').toggleClass("dark");
		if ($('html').hasClass("dark")){
			document.cookie = "theme=dark";
		}
		else {
			document.cookie = "theme=light";
		}
	})
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

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}