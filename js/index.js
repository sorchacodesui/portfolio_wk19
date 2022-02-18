$(document).ready(function() {
    $('.card1').hover(function() {
        $(this).css("background-color", "var(--goldenrod)")
        $(this).css("border", "6px solid var(--almost-black");
        $(this).css("align-items", "flex-start");
        $('.card1 h5').css("color", "var(--almost-black");
        $('.card1 p').css("color", "var(--almost-black");
        $('.card1 .line').css("border-bottom", "1.2px solid var(--almost-black");
    }, function() {
        $(this).css("background-color", "var(--almost-black)");
        $(this).css("align-items", "flex-end");
        $('h5').css("color", "var(--white)");
        $('.card-contents p').css("color", "var(--white)");
        $('.line').css("border-bottom", "1.2px solid var(--white)");
    }
    );
});
$(document).ready(function() {
    $('.card2').hover(function() {
        $(this).css("background-color", "var(--goldenrod)")
        $(this).css("border", "6px solid var(--almost-black");
        $(this).css("align-items", "flex-start");
        $('.card2 h5').css("color", "var(--almost-black");
        $('.card2 p').css("color", "var(--almost-black");
        $('.card2 .line').css("border-bottom", "1.2px solid var(--almost-black");
    }, function() {
        $(this).css("background-color", "var(--almost-black)");
        $(this).css("align-items", "flex-end");
        $('h5').css("color", "var(--white)");
        $('.card-contents p').css("color", "var(--white)");
        $('.line').css("border-bottom", "1.2px solid var(--white)");
    }
    );
});
$(document).ready(function() {
    $('.card3').hover(function() {
        $(this).css("background-color", "var(--goldenrod)")
        $(this).css("border", "6px solid var(--almost-black");
        $(this).css("align-items", "flex-start");
        $('.card3 h5').css("color", "var(--almost-black");
        $('.card3 p').css("color", "var(--almost-black");
        $('.card3 .line').css("border-bottom", "1.2px solid var(--almost-black");
    }, function() {
        $(this).css("background-color", "var(--almost-black)");
        $(this).css("align-items", "flex-end");
        $('h5').css("color", "var(--white)");
        $('.card-contents p').css("color", "var(--white)");
        $('.line').css("border-bottom", "1.2px solid var(--white)");
    }
    );
});


// attempt at if else statement
// $('.card').hover(function() {
//     if ($(this).hasClass('card1')) {
//         $('.card1').addClass('.card-active');
//     } else if ($(this).hasClass('card2')) {
//         $('.card2').addClass('.card-active');
//     } else if ($(this).hasClass('card3')) {
//         $('.card3').addClass('.card-active');
//     }
// });