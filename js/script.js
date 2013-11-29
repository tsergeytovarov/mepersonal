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


	/* Куча пока не оптимизированного кода, который отвечает за отображение стрелок и скролл страницы */

	/* Привести отображение стрелок к 1 функции */

	/* Сделать скролл по поиску следующих или предыдущих элементов */

	$('.abouted').mouseover(function(){
		$('.to-skillsall', this ).css('left',0);
	});
	$('.abouted').mouseout(function(){
		$('.to-skillsall', this ).css('left',60);
	});


	$('.skillsall').mouseover(function(){
		$('.to-abouted').css('left',0);
		$('.to-experence').css('left',0);
	});
	$('.skillsall').mouseout(function(){
		$('.to-abouted').css('left',60);
		$('.to-experence').css('left',60);
	});
	
	$('.to-abouted').click(function(){
		var pos = $('.abouted').offset();
		$('body,html').animate({
    		scrollTop: pos.top
   		}, 800);
	});
	$('.to-experence').click(function(){
		var pos = $('.experence').offset();
		$('body,html').animate({
    		scrollTop: pos.top
   		}, 800);
	});





	$('.experence').mouseover(function(){
		$('.to-skillsall').css('left',0);
		$('.to-portfolio').css('left',0);
	});
	$('.experence').mouseout(function(){
		$('.to-skillsall').css('left',60);
		$('.to-portfolio').css('left',60);
	});
	$('.to-skillsall').click(function(){
		var pos = $('.skillsall').offset();
		$('body,html').animate({
    		scrollTop: pos.top
   		}, 800);
	});
	$('.to-portfolio').click(function(){
		var pos = $('.portfolio').offset();
		$('body,html').animate({
    		scrollTop: pos.top
   		}, 800);
	});




	$('.portfolio').mouseover(function(){
		$('.to-experence').css('left',0);
		$('.to-contact').css('left',0);
	});
	$('.portfolio').mouseout(function(){
		$('.to-experence').css('left',60);
		$('.to-contact').css('left',60);
	});
	$('.to-experence').click(function(){
		var pos = $('.experence').offset();
		$('body,html').animate({
    		scrollTop: pos.top
   		}, 800);
	});
	$('.to-contact').click(function(){
		var pos = $('.contact').offset();
		$('body,html').animate({
    		scrollTop: pos.top
   		}, 800);
	});

	$('.contact').mouseover(function(){
		$('.to-portfolio', this ).css('left',0);
	});
	$('.contact').mouseout(function(){
		$('.to-portfolio', this ).css('left',60);
	});


});