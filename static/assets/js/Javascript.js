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




