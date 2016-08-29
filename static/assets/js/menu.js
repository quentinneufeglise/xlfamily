/**
 * Created by quentin on 8/22/16.
 */


$(document).ready(function() {

    $("body").click(function () {


        if( this.class != 'menu-wrapper' && $(".hamburger").hasClass("hamburger-open")) {
            $(".menu-wrapper").hide();
            $(".hamburger").removeClass("hamburger-open")
            console.log("11")
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

