/* 
elementary.js

*/


// Check for click events on the navbar burger icon
$("#nav-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $("#nav-burger").toggleClass("is-active");
    $("#nav-menu").toggleClass("is-active");

});

$(document).imagesLoaded( function() {
  	$('body').addClass('loaded');
});

$(document).ready(function() {

    $('#showModal').click(function() {
        $('.modal').addClass("is-active");
    });
    $(".modal-close").click(function() {
        $(".modal").removeClass("is-active");
    });
    $(".modal-background").click(function() {
        $(".modal").removeClass("is-active");
    });
});
