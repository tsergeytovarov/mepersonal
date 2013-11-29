$(document).ready(function(){

	/* Отправка формы */

	$('.send').click(function(){
		/* Валидация */
		if ($('#name').val() == '' ){ alert("Введите имя"); return false; }
		if ($('#email').val() == '' ){ alert("Введите email"); return false; }
		/* Отправка */
		$.ajax({
			type: "POST",
			url: "system/api.php",
			data: {
				name: $('#name').val(),
				mail: $('#email').val(),
				mess: $('#message').val(),
			}
		}).done(function(msg){
			$('form').trigger( 'reset' );
			$('.success').fadeIn(300);
		});
	});

	/* Управление отобраением и скрытием стрелок */

	$('.element').mouseover(function(){
		$('.arrows .bottom, .arrows .top ', this).css('left',0);
	}).mouseout(function(){
		$('.arrows .bottom, .arrows .top ', this).css('left',60);
	});

	/* Управление скроллом */

	$('.bottom').click(function(){
		$('body,html').animate({
  			scrollTop: $(this).parents('.element').next().offset().top
  		}, 800);
	});

	$('.top').click(function(){
		$('body,html').animate({
  			scrollTop: $(this).parents('.element').prev().offset().top
  		}, 800);
	});

});
