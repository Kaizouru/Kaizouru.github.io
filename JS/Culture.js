/* JQuery */

$(document).ready(function () {
    /* Resize + highlight h1 - js element */
    $('.heding h1').hover(function () {
        $(this).css("background-color", "rgba(255,255,255,0.6",)
        $(this).css("display", "inline",);
        $(this).css("font-size", "90px",);
    }, function () {
        $(this).css("background-color", "transparent");
        $(this).css("font-size", "70px",);
    });

    /* Flip-box animations */

    $(".flip-box").hover(function () {


        $(this).filter(':not(:animated)').animate({ marginRight: '5px' }, 'fast');
    }, function () {

        $(this).animate({ marginRight: '-1px' }, 'fast');
    });

    $(".flip-box2").hover(function () {


        $(this).filter(':not(:animated)').animate({ marginLeft: '50px' }, 'fast');
    }, function () {

        $(this).animate({ marginLeft: '40px' }, 'fast');
    });


});


