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
            breakpoint: 480,
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
            breakpoint: 480,
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