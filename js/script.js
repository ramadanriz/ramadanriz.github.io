// smooth scrolling
$('.page-scroll').on('click',function(e){

 	var tujuan = $(this).attr('href');
 	var elemenTujuan = $(tujuan);

 	$('html,body').animate({
 		scrollTop: elemenTujuan.offset().top - 50
 	},1000,'swing');

 	e.preventDefault();

 });

// about
$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


// parallax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();


	// jumbotron bg fixed
	$('.jumbotron img').css({
		'transform' : 'translate(0, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll/2 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll/7 +'%)'
	});


	// portofolio landing
	if (wScroll > $('.portofolio').offset().top - 300) {
		$('.portofolio .img-thumbnail').each(function(i){
			setTimeout(function(){
			$('.portofolio .img-thumbnail').eq(i).addClass('muncul');
			}, 1000 * i+1);
		});
	}
});