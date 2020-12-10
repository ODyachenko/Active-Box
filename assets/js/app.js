$(document).ready(function(){

    /*toggle menu*/
    $('#nav-toggle').on('click', function(){
        $('#navbar').slideToggle();
    });

    /*Fixed header*/
    var $scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function(){
        var $headerH = $('#header').innerHeight();
        $scrollPos = $(this).scrollTop();

        if( $scrollPos > $headerH ){
            $('#header-inner').addClass('fixed');
        } else{
            $('#header-inner').removeClass('fixed');
        }
    });


    /*smooth scroll*/
    $("[data-scroll]").on('click', function(event){
        event.preventDefault();

        var $elemID = $(this).data('scroll');
        var $elemOffset = $($elemID).offset().top;

        $('html, body').animate({
            scrollTop: $elemOffset - 70
        }, 700);

    });

    /*Slider*/
    $('#slider').slick({
       infinite: true
       , slidesToShow: 1
       , slidesToScroll: 1
       , fade: true
       , arrows: false
       , dots: true
       , responsive: [
        {
         breakpoint: 990,
            settings:
            {
             dots: false
            }
        }
       ]
   });


});
