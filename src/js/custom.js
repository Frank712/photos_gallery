$('.portafolio-items').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
$('.portafolio-menu ul li').click(function(){
    $('.portafolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $('.portafolio-items').isotope({
        filter:selector
    });
    return false;
});