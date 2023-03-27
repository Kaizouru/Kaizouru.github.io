/* JS */

/* This function display Idan's info and hide the button */
function showIdan() {
    let info = document.getElementById("idantext");
    info.style.display = "block";
    $("#gButton").hide();
};

/* This function display Tal's info and hide the button */

function showAviv() {

    let info = document.getElementById("avivtext");
    info.style.display = "block";
    $("#tButton").hide();
};

/* This function display Omer's info and hide the button */
function showShai() {

    let info = document.getElementById("shaitext");
    info.style.display = "block";
    $("#oButton").hide();
};

/* JS + Jquery */

$(document).ready(function () {
    /* highligthing h1 + resizing */

    $('.heding h1').hover(function () {
        $(this).css("background-color", "transparent");
        $(this).css("display", "grid",);
        $(this).css("font-size", "40px",);
    }, function () {
        $(this).css("background-color", "transparent");
        $(this).css("display", "block",);
        $(this).css("font-size", "60px",);
    });

    /* while hovering each flip-box - it change it opacity so the guide's name + info button are displayed */

    $('.flip-box').hover(function () {
        $(this).css("opacity", "0.8");
    }, function () {
        $(this).css("opacity", "1");
    });

    /* this function include 2 optional scanarios:
    1. If you press each place on flip-box - it zoom in (only h1 & button elemtns)
    2. If you press the display guide's info button - it zoom in (h1 & p elemtns), button disappeared (using JS function above)
    */

    $('.flip-box').click(function () {
        var h = $(this).height();
        var w = $(this).width();

        //get div dimensions
        var div_h = $('.flip-box').height();
        var div_w = $('.flip-box').width();

        $(this).animate({
            opacity: "3",
            zoom: '80%',
            marginRight: "0.5%"
        }, 800)

    });

});



