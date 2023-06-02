var toggle = false;
var buttonElement = $("button#burger-button");

buttonElement.click(function () {
    if (toggle) {
        buttonElement.removeClass("open");
        $('#navbarLinks2').removeClass('visibleClass');
    } else {
        buttonElement.addClass("open");
        $('#navbarLinks2').addClass('visibleClass');
    }
    toggle = !toggle;
});

$(window).resize(function () {
    if (window.innerWidth >= 641) {
        toggle = false;
        buttonElement.removeClass("open");
        $('#navbarLinks2').removeClass('visibleClass');

    }
});
