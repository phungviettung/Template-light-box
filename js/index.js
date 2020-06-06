$(function(){
    $('#recipeCarousel').carousel({
        interval: 2000
    })

    $('.carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

    // cart
    $('.header__cart-wrap').click(function(){
        $('.modal').addClass('showModal')
        $('.modal__body').removeClass('display')
    })

    $('.cart__icon-close').click(function(){
        
        $('.modal__body').addClass('display')
        $('.modal').removeClass('showModal');
        
    })
    $('.modal__overlay').click(function(){
        $('.modal').removeClass('showModal')
        $('.modal__body').addClass('display')
    })
    $('.cart__empty-return').click(function(){
        $('.modal').removeClass('showModal')
        $('.modal__body').addClass('display')
    })
})