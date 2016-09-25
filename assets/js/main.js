if (getCookie("theme") == "light"){
	$('html').removeClass("dark");
}
var searchJSONFile = '/assets/js/clean-search.json',
		$searchBar = null,
		$searchBarInput = null,
		$searchResults = null,
		currentSearchTerm = '',
		jsonLoaded = false;

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


	$searchBar = $('#search-bar');
	$searchBarInput = $('#search-bar-input');
	$searchResults = $('#search-results');

	window.toggleSearch = function toggleSearch() {
		if (!jsonLoaded){
			$.getJSON(searchJSONFile, function(data) {
			    searchData = data["clean_search"];
			    jsonLoaded = true;
			});
		}

		if ($searchBar.hasClass('active-search')) {
			$searchBar.removeClass('active-search');
			$searchResults.html("");
		} else {
			$searchBar.addClass('active-search');
			$searchResults.html("");
			$searchBarInput.val("");
			setTimeout(function(){
				$searchBarInput.focus();
			}, 200);
		}
	};

	// Toggle on ESC key
	$(window).on('keyup', function onKeyPress(e) {
		if (e.which === 27) {
			$searchBar.removeClass('active-search');
		}
	});
	// Open on '/' key
	$(window).on('keypress', function onKeyPress(e) {
		if (e.which === 47 && !$searchBar.hasClass('active-search')) {
			toggleSearch();
		}
	});

	$searchBarInput.on('input', function() {
		searchJSON();
	});	

	$('#search-icon').click(function(e){
		e.preventDefault();
		toggleSearch();
	});
	$('#search-close').click(function(e){
		e.preventDefault();
		toggleSearch();
	});
	$searchResults.click(function(){
		toggleSearch();
	});
	function searchJSON() {
		$searchResults.html("");

		currentSearchTerm = $searchBarInput.val();

		if (!currentSearchTerm || currentSearchTerm.length < 2) {
			$searchResults.html("");
			return;
		}

		var newResults = "";
		for (var post in searchData) {
			if ( searchData[post].title.match(new RegExp(currentSearchTerm, "i")) !== null || searchData[post].content.match(new RegExp(currentSearchTerm, "i")) !== null) {
				newResults = newResults + '<div class="search-result-item">';
				newResults = newResults + '<div class="search-result-image-wrapper">';
				newResults = newResults + '<a href="' + searchData[post].permalink + '">';
				newResults = newResults + '<img class="search-result-image" src="' + searchData[post].image + '" />';
				newResults = newResults + '</a>';
				newResults = newResults + '</div>';
				newResults = newResults + '<div class="search-result-excerpt">';
				newResults = newResults + searchData[post].excerpt;
				newResults = newResults + '</div>';
				newResults = newResults + '</div>';
			}
		}
		$searchResults.html(newResults);
	}
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