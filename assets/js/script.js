/*

=================

ScrollSpy target for the body class

=================

*/

$('body').scrollspy({ target: '#navigation' });


/* Adds data-spy="scroll" to the body, and refreshes it everytime a link on the navigation bar is being clicked */
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

/*=================
End of the ScrollSpy target for the body class
=================*/

$(document).ready(function(){
    // to fade in on page load
    //$("body").fadeIn(400); 
    // to fade out before redirect
    $('#investing').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').toggle(800, function(){
            document.location.href = redirect
        });
    });
});




/*

=================

Smooth scroll for the Hero section button

=================

*/

$(" #hero .button-contact ").on('click', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 0
    }, 700, function() {
      window.location.hash = hash;
    });
});

/*=================
End of the Smooth scroll for the Hero section button
=================*/



/*

=================

Navigation Section

=================

*/

$(document).ready(function(){
    $( ".navbar-toggler" ).click(function() {
        $( ".navbar-collapse" ).toggle( "slow", "linear" );
    });
});

$(document).ready(function() {
    $(window).scroll(function(){                          
        if ($(this).scrollTop() > 600) {
            $('#navigation').slideDown(100);
        } else {
            $('#navigation').slideUp(100);
        }
    });
    
    
    
    /* Retrieving an CSS Selector for the navbar-toggler to move toward an specific margin when clicked*/
    $('.navbar-toggler').on('click', function() {
        $(this).toggleClass('clicked');
    });

    /* Scroll to Top when clicked on Home button (Johnson Enterprise) */
    $("#toTop").click(function () {
       //1 second of animation time
       //html works for FFX but not Chrome
       //body works for Chrome but not FFX
       //This strange selector seems to work universally
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    
    /*Smooth scroll if clicked a navigation link */
    $("nav ul li a ").on('click', function(event) {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top - 0
        }, 700, function() {
          window.location.hash = hash;
        });
    });
    
    /* ==============
    =       Activate this if you wish for another type of scroll when clickin on navbar elements        =
    =============== */
    /*var offset = 80;

    $('.navbar li a').click(function(event) {
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    });*/ /* End of type 2 scroll */


});


/* 
===============

Active class 

===============
*/

function scrollActive(currentId) {
  $('.').removeClass('active');
  $(currentId).addClass('active');
}

$('.nav li').on('activate.bs.scrollspy', function(e) {
  var targetId = $(e.target).find('a').attr('href');
  scrollActive(targetId);

});

/*===============
End of the Active class 
===============*/



/* 
==========

=       Animating Counter when in view      =

========== 
*/

var a = 0;
$(window).scroll(function() {

  var oTop = $('#shiva').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

$(document).ready(function() {
    $('.home').click(function(){
       window.location.href='../index.html';
    });

});


