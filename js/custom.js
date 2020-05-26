$(function () {
    //Menu bar
    $(".toggle-bar").click(function () {
        $(".navbar-nav").toggleClass("active");
    });



    //STICKY MENU
    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 400) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    //    SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        offset: 70,
        clip: true,
    });

    //banner slide part
    $('#banner-slide').slick({
        infinite: true,
        fade: true,
        arrows: true,
        prevArrow: ".right-angle",
        nextArrow: ".left-angle",
        autoplay: true,
        speed: 1500,
    });

    //SKILL slide 
    $('.skill-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        swipe: false,
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    swipe: true,
                    speed: 500,
                }
    },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplay: true,
                    swipe: true,
                    speed: 1500,
                }
    },
  ]
    });

    // FILTER JS
    var mixer = mixitup('.amaz-gellery');

    //    COUNTER JS
    $('.count-num').counterUp({
        delay: 10,
        time: 1000
    });

    //LOGO slide PART
    $(".logo-active").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplay: true,
                    swipe: true,
                    speed: 1500,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplay: true,
                    swipe: true,
                    speed: 1500,
                }
    },
  ]
    });

    //STUFF slide 
    $('.stuff-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        swipe: false,
        responsive: [
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    swipe: true,
                }
    },
            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    swipe: true,
                    speed: 1500,
                }
    },


  ]
    });

    //BACK TO BTN
    $(window).scroll(function () {
        var scrollBtn = $(window).scrollTop();
        if (scrollBtn > 400) {
            $(".bac2-btn").fadeIn();
        } else {
            $(".bac2-btn").fadeOut();
        }
    });

    //    WOW JS
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();
    
     //  venobox js
    $('.venobox').venobox();
    
     //    preloader js
    $(window).load(function () {
        $(".preloader").delay(2000).fadeOut();
    });






});
