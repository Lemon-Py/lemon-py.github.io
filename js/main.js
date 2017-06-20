$(document).ready(function(){
  /*
  // footer hide
  $('footer').hide();

  // random team-member order
  var members = [
    ['Octavio', 'Biologist', 'https://pingendo.com/assets/photos/user_placeholder.png'],
    ['Franco', 'Phycisist', 'https://pingendo.com/assets/photos/user_placeholder.png'],
    ['Cezar', 'C.S. Student', 'https://pingendo.com/assets/photos/user_placeholder.png'],
    ['Carlos', 'Journalist', 'https://pingendo.com/assets/photos/user_placeholder.png']
  ];

  members.sort(function(a, b){return 0.5 - Math.random()});

  for (var i = 0; i<4; i++) {
    $(".team-member-name").eq(i).text(members[i][0]);
    $(".team-member-desc").eq(i).text(members[i][1]);
    $(".team-member-img").eq(i).attr("src",members[i][2]);
  };


  // Collapses navbar after click on mobile
  $('#navbar').on("click", "a", null, function () {
         $('#navbar').collapse('hide');
     });


  // footer toggle
  $('#more').on('click', function(){
    $('footer').slideToggle();
  });

  $('#footer-close').on('click', function(){
    $('footer').slideToggle();
  });
  */
  // Smooth scroll
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  });
});
