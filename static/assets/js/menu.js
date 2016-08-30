/**
 * Created by quentin on 8/22/16.
 */


$(document).ready(function() {


// Close menu on  click outside of body

    $("body").on("click",function (event) {
        var target = event.target;

        if ( $(target).is('.menu-wrapper') || $(target).is('.hamburger')){
            // menu
        } else {
            if($(target).parents('.menu-wrapper').length > 0){
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
