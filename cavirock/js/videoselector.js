$(function () {
    $('.videos .video').click(function () {
        var id = $(this).attr('data-id');
        $('#Video').attr('src', 'http://www.youtube.com/embed/' + id + "?autoplay=1&rel=0");
        //return false;
    });
});
