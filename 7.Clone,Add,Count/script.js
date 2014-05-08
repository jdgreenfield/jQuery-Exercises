$(document).ready(function(){
	$('.add-item').click(function(){
		var x = $('#numberToAdd').val();
		for(i=1;i<=x;i++){
			$('.template li').clone().text('text' + i).appendTo('.sample-list');
			$('.count').text(i);
			console.log('1st Step');
		};

	});
	

});