$(document).ready( function() {

  $(".intro1").hide();
  $(".intro2").hide();
  $(".navFade").hide();

  if ( $(window).width() < 992 ) {
    $(".navItem").hide();
  }

}); // end on doc ready


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




      $('.skillsBanner').typeIt({
       strings: ["System.out.println('Skills'):", "Skills"],
       speed: 60,
       breakLines: false,
       autoStart: false
     });
/*
     $('.allskills').typeIt({
     strings: ["1| if (language = html)", " 2|.....int level = 10", " 3| if (language = css)", " 4|.....int level = 9", " 5| if (language = javascript)", " 6|.....int level = 6", " 7| if (language = Java)", " 8|.....int level = 6", " 9| if (language = Android)", "10|.....int level = 9", "11| if (language = Node.js)", "12|.....int level = 4"],
     speed: 10,
     autoStart: false
   }); */
     $('.skillsSummary').typeIt({
     strings: ["'Talks is cheap. Show me the code.'"],
     speed: 20,
     autoStart: false
   });

     $('.professionalSide1').typeIt({
     strings: ["HTML ", " ", "CSS ", " ", "Javascript ", " ", "JQuery "],
     speed: 20,
     autoStart: false
   });

   $('.professionalSide2').typeIt({
   strings: ["Java ", " ", "Android ", " ", "Node.js ", " ", "Arduino "],
   speed: 20,
   autoStart: false
  });

//icons fade others when hovering over one
    var elems = $('.icons');
    elems.on('mouseenter mouseleave', function(e) {
    elems.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.5:1);
  });



//phone div hover
    $('.phone').hover( function() {
      $(this).fadeTo( "medium", 1 );
      $('.phoneText').css("color", "black");
      $('.phoneText').html("(949)923-0445");
    }, function() {
      $(this).fadeTo( "fast", .6 );
      $('.phoneText').css("color", "#069ea0");
      $('.phoneText').html("phone");
    });


//email hover
    $('.email').hover( function() {
      $(this).fadeTo( "medium", 1 );
      $('.emailText').css("color", "white");
      $('.emailText').html("patel.arjun50@gmail.com");
    }, function() {
      $(this).fadeTo( "fast", .6 );
      $('.emailText').css("color", "#069ea0");
      $('.emailText').html("email");
    });


}); // end on Window ready
