/**
 * Created by quentin on 8/22/16.
 */


$(document).ready(function () {


// Close menu on  click outside of body

    $("body").on("click", function (event) {
        var target = event.target;

        if ($(target).is('.menu-wrapper') || $(target).is('.hamburger')) {
            // menu
        } else {
            if ($(target).parents('.menu-wrapper').length > 0) {
                // menu
            } else {
                // not menu
                $(".menu-wrapper").removeClass('menu-open');
            }
        }
    });


    $(".hamburger").click(function () {

        $(".menu-wrapper").addClass("menu-open");
        $(".hamburger").addClass("hamburger-open");

    });


    $(".menu-cross").click(function () {
        $(".menu-wrapper").removeClass('menu-open');
    });
});


$(document).ready(function () {


// Close menu on  click outside of body

    $("body").on("click", function (event) {
        var target = event.target;

        if ($(target).is('.contact-menu-wrapper') || $(target).is('.contact-open2') || $(target).is('.get-in-touch2')) {
            // menu
        } else {
            if ($(target).parents('.contact-menu-wrapper').length > 0) {
                // menu
            } else {
                // not menu
                $(".contact-menu-wrapper").removeClass('menu-open');
            }
        }
    });


    $(".get-in-touch2").click(function () {
        $(".contact-menu-wrapper").addClass("menu-open");
        $(".contact-open").addClass("hamburger-open");

    });

    $(".contact-open2").click(function () {
        $(".contact-menu-wrapper").addClass("menu-open");
        $(".contact-open").addClass("hamburger-open");

    });


    $(".menu-cross").click(function () {
        $(".menu-wrapper").removeClass('menu-open');
    });
});

$(".menu-cross2").click(function () {
    $(".contact-menu-wrapper").removeClass('menu-open');
});


$(".menu-cross3").click(function () {
    $(".subscribe-menu-wrapper").removeClass('menu-open');
});


$(document).ready(function () {
    $(".approach-link").on("click", function () {

        $(".menu-items").hide();
        $(".menu-items2").show();

    });

});

$(document).ready(function () {
    $(".arrow-back").on("click", function () {

        $(".menu-items2").hide();
        $(".menu-items").show();

    });

});

$(document).ready(function () {
    $(".adventures-link").on("click", function () {

        $(".menu-items").hide();
        $(".menu-items3").show();

    });

});

$(document).ready(function () {
    $(".arrow-back").on("click", function () {

        $(".menu-items3").hide();
        $(".menu-items").show();

    });

});


$(document).ready(function () {


// Close menu on  click outside of body

    $("body").on("click", function (event) {
        var target = event.target;

        if ($(target).is('.subscribe-menu-wrapper') || $(target).is('.update-link')) {
            // menu
        } else {
            if ($(target).parents('.subscribe-menu-wrapper').length > 0) {
                // menu
            } else {
                // not menu
                $(".subscribe-menu-wrapper").removeClass('menu-open');
            }
        }
    });


    $(".update-link").click(function () {
        $(".subscribe-menu-wrapper").addClass("menu-open");
        $(".update-link").addClass("hamburger-open");

    });
});



// Hide the forms on filling in and pressing on Submit

//$(document).ready(function () {

  //  $(".send-button").click(function () {
    //            $(".form-group").hide(1000);
   // });

//});