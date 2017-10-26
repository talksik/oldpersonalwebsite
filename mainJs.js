$(document).ready( function() {

  $(".intro1").hide();
  $(".intro2").hide();
  $(".navFade").hide();

  if ( $(window).width() < 992 ) {
    $(".navItem").hide();
  }

}); // end on doc ready


$('.getStarted').hover( function () {
  $('#contact').css("color","black").fadeIn();
  $('.getStarted').css({"height":"50px","background-image":"url(Images/phone.jpg)"}).fadeIn(500);
},
function () {
  $('#contact').css("color","white").fadeIn();
  $('.getStarted').css({"height":"50px","background-image":"url(Images/phoneEmail.jpg)"}).fadeIn(500);
});


$(window).on("load",function() {

  $(".intro1").delay(800).fadeIn(400);
  $(".intro2").delay(800).fadeIn(400);
  $(".navFade").delay(800).fadeIn(800);

  $(window).scroll(function() {

    if ( $(window).width() > 992 ) {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".profFade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
          });
      }

      else {
        $(".profFade").show(); }

  }).scroll(); //invoke scroll-handler on page-load

     $('.skillsSummary').typeIt({
     strings: ["'Talks is cheap. Show me the code.'"],
     speed: 20,
     autoStart: false
   });

//icons fade others when hovering over one
    var elems = $('.icons');
    elems.on('mouseenter mouseleave', function(e) {
    elems.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.5:1);
  });



}); // end on Window ready
