(function($){
    "use strict"
    //moving designations
    if ($('.typed-text-output').length == 1) {
        var new_string = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: new_string.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    //navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    // skill progress bar
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function(){
            $(this).css("width", $(this).attr("aria-valuenow")+'%');
        });
    }, { offset: '70%' });
    //Loader
    $(window).on("load", function () {
        $(".loader-wrapper").fadeOut("slow");
    });

})(jQuery);



