
//header bclock
$(function() {
    $('.header__slider-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }   
        ]
    });

    $(window).on('resize', function() {
        $('.header__slider-list').slick('resize');
    });
});

$('.advantages__pagination li').on('mouseover', function() {
    $(this).parents('.fade').slick('goTo', $(this).index());
});
//advantages block
$(function() {
    $('.advantages__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.advantages__list').slick('resize');
    });
});

$('.advantages__pagination li').on('mouseover', function() {
    $(this).parents('.fade').slick('goTo', $(this).index());
});

//our-work block
$(function() {
    $('.our-works__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 600,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.our-works__list').slick('resize');
    });
});

$('.advantages__pagination li').on('mouseover', function() {
    $(this).parents('.fade').slick('goTo', $(this).index());
});

//operation block
$(function() {
    $('.operation__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.operation__list').slick('resize');
    });
});

$('.advantages__pagination li').on('mouseover', function() {
    $(this).parents('.fade').slick('goTo', $(this).index());
});

// team block
$(function() {
    $('.team__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.team__list').slick('resize');
    });
});

$('.advantages__pagination li').on('mouseover', function() {
    $(this).parents('.fade').slick('goTo', $(this).index());
});



