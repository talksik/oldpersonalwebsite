$(function(){
    $('a[href^="#"]').click(function(e){
          var target = $(this).attr('href');
          var strip = target.slice(1);
          var anchor = $("a[name='"+  strip  +"']");

          e.preventDefault();

          $('html, body').animate({

            scrollTop: anchor.offset().top

          }, 'slow');
          return false;
    });

});




$(window).scroll(function(){


    var wScroll = $(this).scrollTop();

    $('.containerIntro').css({
      'transform' : 'translate(-50%, '+ wScroll/2 +'px)'
    });

    $('.coverPag').css({
      'transform' : 'translate(-50%, '+ wScroll/2 +'px)'
    });

    $('.parallaxImg').css('background-position', '0 ' + -wScroll/4 + 'px');

    $('.connect').css('top', -50 +(wScroll * .15) + 'px');


});



// navbar fade out when you scroll down and fade in when you scroll up
$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < 500) {
      $(".header").fadeIn("medium");
    }
    else if (currentTop < this.previousTop) {
        $(".header").fadeIn("medium");
      }
    else  {
        $(".header").fadeOut("medium");
    }
      this.previousTop = currentTop;
});
