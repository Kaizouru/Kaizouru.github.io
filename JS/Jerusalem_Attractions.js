/* JS */

/* display slideshow */

$(function () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 1500); // Change image every 1.5 seconds

    }


});

/* JQuery */



$(document).ready(function () {
    /* highligthing h1 + resizing */
    $('.heding h1').hover(function () {
        $(this).css("background-color", "rgba(255,255,255,0.6",);
        $(this).css("display", "inline",);
        $(this).css("font-size", "90px",);
    }, function () {
        $(this).css("background-color", "transparent");
        $(this).css("font-size", "70px",);
    });
});