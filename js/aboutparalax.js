

$(window).scroll(function() {
    const parallax = $(window).scrollTop();
    $('#aboutParalax').css('background-position-x', `${-parallax / 5}px`);
});

$(window).scroll(function() {
    const parallax = $(window).scrollTop();
    $('#bgmovedemon').css('background-position-y', `${-parallax / 2}px`);
});
$(window).scroll(function() {
    const parallax = $(window).scrollTop();
    $('#workingaboutsection').css('background-position-y', `${-parallax / 5}px`);
});