// ===== type js 
var typed = new Typed('.type', {
    strings: ["Frontend Developer...", "Graphics Designer...", "Freelancer..."],
    typeSpeed: 100,
    loopCount: Infinity,
    loop: true,
    backDelay: 1500,
});

// ----- end



// ======== progress bar

// == frontend development
$('.progress_html').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});
$('.progress_css').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});
$('.progress_bs').rProgressbar({
    percentage: 80,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});
$('.progress_sass').rProgressbar({
    percentage: 60,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});
$('.progress_js').rProgressbar({
    percentage: 20,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});

// == graphics design
$('.progress_ps').rProgressbar({
    percentage: 80,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});
$('.progress_li').rProgressbar({
    percentage: 40,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});
$('.progress_fg').rProgressbar({
    percentage: 60,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});
$('.progress_xd').rProgressbar({
    percentage: 50,
    fillBackgroundColor: '#10AC84',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    height: '5px',
    width: '100%',
    duration: 1100,
});

// ----- end




// ======== service slider

$('.service_lisr_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// ----- end




// ======== service slider

$('.port_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// ----- end



// ======== Back to top annimate

$(".back_to_top").click(function () {
    $("html,body").animate({
        scrollTop: 0,
    }, )
})

// ----- end

// ======== Back to top annimate
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// ----- end




// ======== fixed menu
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".addFix").addClass("fixedMenu")
    } else {
        $(".addFix").removeClass("fixedMenu")
    }

    if ($(window).scrollTop() > 550) {
        $(".back_to_top").fadeIn(500)
    } else {
        $(".back_to_top").fadeOut(500)
    }
})

// ----- end

jQuery('.scroll').onePgaeNav({
    wrapper: '#onepage-nav',
});






// ============= aos annimation

AOS.init({
    duration: 600,
    once: true,
});