(function () {
	var searchJSONFile = '',
		$searchBar = null,
		$searchBarInput = null,
		$searchResults = null,
		currentSearchTerm = '';

	window.toggleSearch = function toggleSearch() {
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

	function initialize(options) {
		searchJSONFile = '/assets/js/clean-search.json';
		$searchBar = $('#search-bar');
		$searchBarInput = $('#search-bar-input');
		$searchResults = $('#search-results');
		currentSearchTerm = '';

		$.getJSON(searchJSONFile, function(data) {
		    searchData = data["clean_search"];
		});

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
	}

	initialize.toggle = toggleSearch;

	window.cleanSearch = initialize;

})();