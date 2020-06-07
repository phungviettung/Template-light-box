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

    $('.cart__icon-close, .modal__overlay, .cart__empty-return').click(function(){
        
        $('.modal__body').addClass('display')
        $('.modal').removeClass('showModal');
        
    })

    $('.color-lbl-text').click(function(){
        
        $('.color-lbl-text').removeClass('active');
        $(this).addClass('active');
    })

    $('.color-lbl-size').click(function(){
        
        $('.color-lbl-size').removeClass('active');
        $(this).addClass('active');
    })

    // zoom
  $('.product__detail-zoom').on('mouseover', function(){
    $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
  })
  .on('mouseout', function(){
    $(this).children('.photo').css({'transform': 'scale(1)'});
  })
  .on('mousemove', function(e){
    $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
  })
  // click thay background
  $('.product-img-item ').click(function(){
      image = $(this).attr('data-image');
    //   console.log(image);
    $('.photo').css({'background-image': 'url('+ image +')'});
  })


});