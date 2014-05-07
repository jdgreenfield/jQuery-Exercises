$(document).ready(function(){
	$('.removeMe p').empty();
	console.log('Step 1');
	$('.removeMe p').remove();
	console.log('Step 2');
	$('.removeMe').remove();
	console.log('Step 3');
	$('.sandbox').append('<div class="target"></div>');
	console.log('Step 4');
	$('.target').append('<p></p>');
	console.log('Step 5');
	$('.target p').append('Hello World!');
	console.log('Step 6');

	});