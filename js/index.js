
window.addEventListener('scroll', () => {
    parallax = window.pageYOffset
    section.style.backgroundPositionX = `${-parallax / 2}px`;
    console.log(parallax)
});


function pageAnimations() {
    const interval = setInterval(() => {
        const parallax = $(window).scrollTop();
        if (parallax >= 600) {
            $('#aboutText').css('opacity', 1);
        } else {
            $('#aboutText').css('opacity', 0)
        }
        if (parallax >= 2480) {
            $('#cute').css({
                'opacity': 1,
                'transform': 'translateX(0px)'
            })
        } else {
            $('#cute').css({
                'opacity': 0,
                'transform': 'translateX(200px)'
            })
        }
        if (parallax >= 3300) {
            $('#happy').css({
                'opacity': 1,
                'transform': 'translateY(0px)'
            });
        } else {
            $('#happy').css({
                'opacity': 0,
                'transform': 'translateY(400px)'
            });
        }
    }, 100);
}

pageAnimations();