$(function(){

	$('[data-modal-target]').on('click', function(){
		var elem = $(this),
			target_modal_name = elem.data('modal-target'),
			modal = $('[data-modal-name="'+target_modal_name+'"]')

		// animate modal down
		modal.stop().animate({
			'top': '100'
		}, 200)

		// fade the modal-bg in
		$('.modal-bg')
		.css({
			'display': 'block',
			'opacity': '0'
		})
		.stop().animate({
			'opacity': '1'
		}, 200)
	})

	$('[data-modal-close]').on('click', function(){

		// animate modal back up above the page
		$('.modal').stop().animate({
			'top': '-400px'
		}, 200)

		$('.modal-bg').stop().animate({
			'opacity': '0'
		}, 200, function(){
			$(this).css(
				'display', 'none')
		})

		return false;

	})


})