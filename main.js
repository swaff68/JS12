$(document).on('ready', function() {

// Makes the system track the position of the mouse on click

$(document).click('#map', function(){
	$( document ).on( "mousemove", function( event ) {
 	 $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
 	 console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
	});


// When you click, makes the system place a marker on the position that was 
// clicked and the position of the marker is middle bottom. 

	var marker = $('<div> <img class="icon" src="gold rush marker.png"></div>').attr
		('class','newIcon').appendTo('#map').css({
				'position': 'absolute',
				'top': event.pageY - 40,
				'left': event.pageX - 19

	});

	var markerNote = $('<div></div>').addClass('noteLabel').appendTo(marker);

	
	var note = prompt("Please enter a note for this marker");
	$(markerNote).text(note)


// Makes the selected marker disappear when it is clicked on.
$(document).on('click', '.newIcon', function(event){
	$(this).remove();
	event.stopPropagation();
	console.log('trigger');
	});
});



  
});