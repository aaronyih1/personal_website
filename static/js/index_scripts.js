$( document ).ready(function() {
	var counter = 0;
	setInterval(function(){
		$('body').css("background-position", "0px "+counter+"px");
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

