$(document).on('ready', function() {

// Makes the system track the position of the mouse on click

$('#map').click(function(){
	$( document ).on( "mousemove", function( event ) {
 	 $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
 	 console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
	});


// When you click, make sthe system place a marker on the position that was 
// clicked and the position of the marker is middle bottom. 

	$('<div> <img class="icon" src="gold rush marker.png"></div>').attr
		('class','newIcon').appendTo('#map').css({
				'position': 'absolute',
				'top': event.pageY - 40,
				'left': event.pageX - 19

	});



});


// Makes the selected marker disappear when it is clicked on.
$(document).on('click', '.newIcon', function(){
	$(".newIcon").remove();
	event.stopPropagation();
	});

  
});