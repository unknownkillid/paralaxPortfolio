window.addEventListener('scroll', () => {
    parallax = window.pageYOffset;
    section.style.backgroundPositionX = `${-parallax / 2}px`;
    console.log(parallax);
});


function pageAnimations() {
    const interval = setInterval(() => {
        const parallax = $(window).scrollTop();
        if (parallax >= 600) {
            $('#aboutText').css('opacity', 1);
        } else {
            $('#aboutText').css('opacity', 0)
        }
        if (parallax >= 2180) {
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
        if (parallax >= 2900) {
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

$(document).ready(function() {
    let prevScrollPos = $(window).scrollTop();
    const navbar = $('#navbar');
  
    $(window).scroll(function() {
      const currentScrollPos = $(window).scrollTop();
      if (prevScrollPos > currentScrollPos) {
        navbar.css('top', '0');
      } else {
        navbar.css('top', `-${navbar.outerHeight()}px`);
      }
      prevScrollPos = currentScrollPos;
    });
      navbar.css('transition', 'top 0.3s ease');
  });