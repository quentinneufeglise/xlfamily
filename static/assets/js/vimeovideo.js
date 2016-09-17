/*===VIMEO VIDEO===*/

$(document).ready(function() {

    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);


    $("#playbutton").click(function(){
        $(".home-video").fadeIn(800);
        $(".menu-cross4").fadeIn(800);
        $("body").addClass("no-scroll");
        player.play();
    });


    $(".menu-cross4").click(function(){
        $(".home-video").fadeOut(800);
        $(".menu-cross4").fadeOut(800);
        $("body").removeClass("no-scroll");
        player.unload();

    });

/*
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

*/

});



