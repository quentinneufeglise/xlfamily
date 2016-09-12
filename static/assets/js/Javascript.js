/**
 * Created by quentin on 8/16/16.
 */
$(document).ready(function() {

    var owl = $('.owl-cases');

    owl.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        stopOnHover: true
    });

    owl.owlCarousel();
    $(".next").click(function(){
        owl.trigger('owl.next');
    })

    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })

});

$(document).ready(function() {

    var owl1 = $('.owl-team');

    owl1.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        lazyLoad : true,
        stopOnHover: true

    });

    owl1.owlCarousel();
    $(".next1").click(function(){
        owl1.trigger('owl.next');
    });

    $(".prev1").click(function(){
        owl1.trigger('owl.prev');
    })


});


$(document).ready(function() {

    var owl2 = $('.owl-projects-mobile');

    owl2.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        stopOnHover: true
    });

    owl2.owlCarousel();
    $(".next2").click(function(){
        owl2.trigger('owl.next');
    });

    $(".prev2").click(function(){
        owl2.trigger('owl.prev');
    })


});






$("#playbutton").click(function(){
    $(".home-video").fadeIn(800);
    $(".menu-cross4").fadeIn(800);
    $("body").addClass("no-scroll");

});


$(".menu-cross4").click(function(){
    $(".home-video").fadeOut(800);
    $(".menu-cross4").fadeOut(800);
    $("body").removeClass("no-scroll");

});























window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));


/*blog links*/
$(document).ready(function() {

    $('#blog1').click(function(e) {
        window.location = ("blog-corporate-acceleration.html");
    });


    $('#blog2').click(function(e) {
        window.location = ("blog-corporate-blind-spot.html");
    });

    $('#blog3').click(function(e) {
        window.location = ("blog-business-sprint.html");
    });

    $('#blog4').click(function(e) {
        window.location = ("blog-innovation-model.html");
    });

    $('#blog5').click(function(e) {
        window.location = ("blog-being-lean.html");
    });

    $('#blog6').click(function(e) {
        window.location = ("blog-copycatting.html");
    });

    $('#blog7').click(function(e) {
        window.location = ("blog-corporates-startups.html");
    });

    $('#blog8').click(function(e) {
        window.location = ("blog-landing-pages-validation.html");
    });

    $('#blog9').click(function(e) {
        window.location = ("blog-sci-fi.html");
    });

    $('#blog10').click(function(e) {
        window.location = ("blog-customer-interviews.html");
    });



});
