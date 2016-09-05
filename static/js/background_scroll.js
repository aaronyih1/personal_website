$( document ).ready(function() {
	var counter = 0;
	setInterval(function(){
		$('body').css("background-position-y", counter);
		counter+=0.1;
	}, 1);
	

});


$( document ).ready(function() {
	$(".highlight_text").on({
	  mouseenter: function() {
	    $( "#ghost_highlight" ).css( "background-color", "yellow" );
	  },
	  mouseleave: function() {
	    $( "#ghost_highlight" ).css( "background-color", "transparent" );
	  }
	});
});

