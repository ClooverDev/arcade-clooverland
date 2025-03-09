$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};


const CURRENT_PROGRESS_INT = 2;
var PROGRESSIVE_INT_COUNT = 0;
const CURRENT_PROGRESS_TITLE = "SUPER PLATFORM: REORIGINAL !! GAME FROZEN !!";

function increase_int() { 
	if (PROGRESSIVE_INT_COUNT <= CURRENT_PROGRESS_INT) {
		PROGRESSIVE_INT_COUNT += 1;

		setTimeout(function() {
			increase_int();
		}, 25);
		
		if (PROGRESSIVE_INT_COUNT > CURRENT_PROGRESS_INT) {
			PROGRESSIVE_INT_COUNT = CURRENT_PROGRESS_INT;
		}
		
		update_main_info();
	}
	
}

function update_main_info() {
	const inner_bar = "#bar_inner";
	const bar_title = document.getElementById("bar_title");
	
	$(inner_bar).width(PROGRESSIVE_INT_COUNT+"%");
	bar_title.innerHTML = CURRENT_PROGRESS_TITLE+" <br><span style='color:white; font-size: 32px;'>["+PROGRESSIVE_INT_COUNT+"%]</span>";
}

function update_progress_bar() {
	const inner_bar = "#bar_inner";
	const bar_title = document.getElementById("bar_title");
	
	increase_int();
	$(inner_bar).width(PROGRESSIVE_INT_COUNT+"%");
	bar_title.innerHTML = CURRENT_PROGRESS_TITLE+" <br><span style='color:white; font-size: 32px;'>["+PROGRESSIVE_INT_COUNT+"%]</span>";
}
