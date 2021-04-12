document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('preloader')
        if(!preloader.classList.contains('done') )
        {
            preloader.classList.add('done')
        }
    }, 1000)

}

$(document).ready(function(){
    $(".fullscreen__hi").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});