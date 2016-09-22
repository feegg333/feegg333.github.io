$(function () {

    //Smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function (event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function () {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            },
            onNavigate: function (direction, itemIndex) {
                if (window.console) {
                    return console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
                }
            }
        });
    });

    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });

    $(".live-tile").liveTile();


}); // jQuery Ready - End


//Hide navbar
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

//FadeIn Skill Details
$("#more_a").click(function () {
    $("#more").animate({
        opacity: 0,
    }, 1500, function () {
        $("#more").remove();
        $("#more_details").fadeIn(1500);
    });

});