$(document).ready(function(){
  // Collapses navbar after click on mobile
  $('#navbar').on("click", "a", null, function () {
         $('#navbar').collapse('hide');
     });

  // footer hide-show
  $('footer').hide();

  $('#more').on('click', function(){
    $('footer').slideToggle();
  });

  $('#footer-close').on('click', function(){
    $('footer').slideToggle();
  });
});
