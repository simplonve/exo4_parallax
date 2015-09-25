window.onload = (function(){
  [].forEach.call(document.querySelectorAll('div[data-type="background"]'), function(item, i){
    window.addEventListener("scroll", function(){
      var yPos = -(window.pageYOffset / item.getAttribute("data-speed"));
      var coords = '50% '+ yPos + 'px';
      item.style.backgroundPosition = coords;
    });
  });
});

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
