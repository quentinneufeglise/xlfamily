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
    });




});







/*=== Play the video on the playbutton and pause it on the X

 $(function(){
 $(document).delegate('#playbutton','click',function(){
 $('#video-home')[0].play();
 });
 $(document).delegate('.menu-cross4','click',function(){
 $('#video-home')[0].pause();
 });
 }); ===*/


/*===VIMEO IFRAME===*/















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
        window.location = ("blog/successful-in-corporate-acceleration-start-innovating-with-a-purpose.html");
    });


    $('#blog2').click(function(e) {
        window.location = ("blog/corporate-blind-spot.html");
    });

    $('#blog3').click(function(e) {
        window.location = ("blog/sprint-how-to-scaleup-corporate-innovation.html");
    });

    $('#blog4').click(function(e) {
        window.location = ("blog/choosing-the-right-innovation-model.html");
    });

    $('#blog5').click(function(e) {
        window.location = ("blog/what-corporations-dont-get-about-being-lean.html");
    });

    $('#blog6').click(function(e) {
        window.location = ("blog/get-inspired-by-everyday-life-the-art-of-copycatting.html");
    });

    $('#blog7').click(function(e) {
        window.location = ("blog/how-corporates-and-startups-can-collaborate.html");
    });

    $('#blog8').click(function(e) {
        window.location = ("blog/why-landing-pages-are-an-effective-tool-for-idea-validation.html");
    });

    $('#blog9').click(function(e) {
        window.location = ("blog/sci-fi-storytelling-or-fortunetelling.html");
    });

    $('#blog10').click(function(e) {
        window.location = ("blog/customer-interviews-dont-let-people-lie-to-you.html");
    });


});


/*adventures*/

$(document).ready(function() {

    $('#experiments1').click(function(e) {
        window.location = ("adventure-xllab.html");
    });

    $('#experiments2').click(function(e) {
        window.location = ("adventure-xlventures.html");
    });

    $('#experiments3').click(function(e) {
        window.location = ("adventure-xlevents.html");
    });

    $('#adventure-block-xllab').click(function(e) {
        window.location = ("adventure-xllab.html");
    });

    $('#adventure-block-xlventures').click(function(e) {
        window.location = ("adventure-xlventures.html");
    });

    $('#adventure-block-xlevents').click(function(e) {
        window.location = ("adventure-xlevents.html");
    });


});


/*blog artciles - article pages*/

$(document).ready(function() {

    $('#article-block-corporate-acceleration').click(function(e) {
        window.location = ("successful-in-corporate-acceleration-start-innovating-with-a-purpose.html");
    });


    $('#article-block-corporate-blind').click(function(e) {
        window.location = ("corporate-blind-spot.html");
    });

    $('#article-block-business-sprint').click(function(e) {
        window.location = ("sprint-how-to-scaleup-corporate-innovation.html");
    });

    $('#article-block-innovation-model').click(function(e) {
        window.location = ("choosing-the-right-innovation-model.html");
    });

    $('#article-block-being-lean').click(function(e) {
        window.location = ("what-corporations-dont-get-about-being-lean.html");
    });

    $('#article-block-copycatting').click(function(e) {
        window.location = ("get-inspired-by-everyday-life-the-art-of-copycatting.html");
    });

    $('#article-block-corporates-startups').click(function(e) {
        window.location = ("how-corporates-and-startups-can-collaborate.html");
    });

    $('#article-block-landing-page-validation').click(function(e) {
        window.location = ("why-landing-pages-are-an-effective-tool-for-idea-validation.html");
    });

    $('#article-block-sci-fi').click(function(e) {
        window.location = ("sci-fi-storytelling-or-fortunetelling.html");
    });

    $('#article-block-customer-interviews').click(function(e) {
        window.location = ("customer-interviews-dont-let-people-lie-to-you.html");
    });


});

/*cases*/

$(document).ready(function() {

    $('#case-block-veh').click(function(e) {
        window.location = ("case-vereniging-eigen-huis.html");
    });

    $('#case-block-broshuis').click(function(e) {
        window.location = ("case-broshuis.html");
    });

    $('#case-block-deltalloyd').click(function(e) {
        window.location = ("case-deltalloyd.html");
    });

    $('#case-block-bdo').click(function(e) {
        window.location = ("case-bdo.html");
    });

});



