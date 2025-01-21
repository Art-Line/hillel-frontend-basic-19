$(".js-burger").on("click", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass("active");
        $('.menu').removeClass('menu-show')
    } else {
        $(this).addClass("active");
        $('.menu').addClass('menu-show')
    }
});
