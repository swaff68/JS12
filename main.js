$(document).on('ready', function() {

$('#map').click(function(){
	$( document ).on( "mousemove", function( event ) {
 	 $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
 	 console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
	});

	$('<div> <img class="icon" src="gold rush marker.png"></div>').attr('class','newIcon').appendTo('#map').css({
		'position': 'absolute',
		'top': event.pageY - 40,
		'left': event.pageX - 19

	});



});



  
});