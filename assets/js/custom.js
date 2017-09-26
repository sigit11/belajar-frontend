
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

// var jumboHeight = $('.download-section').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg-1').css('height', (jumboHeight-scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
// });