$(document).ready(function(){
	var word = $('.sample').children('.firstParagraph').children('.targetText').text();
	console.log(word);
	$('.sample').children('.firstParagraph').children('.nextText').text(word);
	$('.sample').children('.emptyText').text(word);

	});
