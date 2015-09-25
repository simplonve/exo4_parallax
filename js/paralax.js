function parallax () {
	var background = document.querySelectorAll('div[data-type="background"]');
	for (var image = 0; image < background.length; image++) {
		var ypos = (-window.pageYOffset / background[image].getAttribute('data-speed'));
		background[image].style.backgroundPosition = '50% '+ ypos +'px';
		// var coords = '50% '+ ypos +'px';
	}
}
window.onload = (function (){
  window.addEventListener('scroll', parallax);
})



















// $(document).ready(function(){
//   $('div[data-type="background"]').each(function(){
//     var $background_object = $(this);
//     $(window).scroll(function() {
//       var yPos = -($(window).scrollTop() / $background_object.data('speed'));
//       var coords = '50% '+ yPos + 'px';
//       $background_object.css({ backgroundPosition: coords });
//     });
//   });
// });
