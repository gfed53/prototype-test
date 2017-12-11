$(function(){
	console.log('elo world');

	// Swiper

	var mySwiper = new Swiper('.swiper-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		mousewheelControl: false
	});

	// Toggle Button 
	$('.swiper-slide').on('click', '.btn-toggle', function(){
		// console.log('this',$(this));
		// console.log('parent?',$(this).parent().parent());

		let $button = $(this);
		let $parentGrid = $(this).parent().parent();

		console.log('$button',$button);

		// Button animation
		$button.addClass('btn-toggle-pressed');
		let timeout = setTimeout(() => {
			$button.removeClass('btn-toggle-pressed');
			clearTimeout(timeout);
		}, 200);

		


		// $button.velocity({
		// 	'box-shadow': 'none'
		// }, {
		// 	duration: 200
		// });

	});
	

});