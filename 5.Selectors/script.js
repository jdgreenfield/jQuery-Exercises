$(document).ready(function(){
	$('.sandbox p:nth-child(2)').css('color','red');
	console.log('1st Step');
	$('.sandbox p:nth-child(1)').css('background-color','red');
	console.log('2nd Step');
	$('.sandbox p:nth-child(3)').remove();
	console.log('3rd Step');
	$('.sandbox ul li:nth-child(4)').css('color','blue');
	console.log('4th Step');
	$('.sandbox ul li:nth-child(2)').text('I did it!');
	console.log('5th Step');


});
