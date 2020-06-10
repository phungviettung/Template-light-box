$(function () {
  $("#carouselExampleIndicators").carousel({
    interval: 0,
  });

  $(".carousel__product-item").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  });

  // cart
  $(".header__cart-wrap").click(function () {
    $(".modal").addClass("showModal");
    $(".modal__body").removeClass("display");
  });

  $(".icon-close, .modal__overlay, .cart__empty-return").click(function () {
    $(".modal__body").addClass("display");
    $(".modal").removeClass("showModal");
  });

  

  $(".header__navbar-item").click(function () {
    title_menu = $(this).children('.header__navbar-name').text();
    // console.log(title_menu);
    $(this).parent().prev().find('.menu2-title').text(title_menu);
    $(this).children(".navbar-menu2").addClass("menu2-display");
    $('.go-back-menu').removeClass('hidden')
  });

  $(".navbar__toggle").click(function () {
    $(".header__navbar-content").addClass("navbar-on-mobile");
    $(".modal").addClass("showModal");
    $('.go-back-menu').addClass('hidden');
    $('.icon-close').addClass('hide-on-mobile');

  });

  $(".modal__overlay, .close-menu").click(function () {
    $(".header__navbar-content").removeClass("navbar-on-mobile")
    $('.modal').removeClass('showModal');
    $('.navbar-menu2').removeClass('menu2-display');
    $('.icon-close').removeClass('hide-on-mobile');
    $('.menu2-title').text("Browser Category");
  });



  $(".go-back-menu").click(function () {
    $(this).parent().next().children().find('.navbar-menu2').removeClass('menu2-display');
    $(this).addClass('hidden');
    $(this).next().text("Browser Category");

    // console.log($(this).parent().parent().parent());
  });
  // cart add
  $(".plus-button").click(function () {
    quantity = $(this).prev().val();
    quantity++;
    $(this).prev().val(quantity);
    $(this).prev().prev().removeClass("disable");
  });

  $(".minus-button").click(function () {
    quantity = quantity = $(this).next().val();
    quantity--;
    $(this).next().val(quantity);
    if ($(this).next().val() == 1) {
      $(".minus-button").addClass("disable");
    }
  });

  if ($(".item__quantity-input").val() == 1) {
    $(".minus-button").addClass("disable");
  }

  $(".color-lbl-text").click(function () {
    $(".color-lbl-text").removeClass("active");
    $(this).addClass("active");
  });

  $(".color-lbl-size").click(function () {
    $(".color-lbl-size").removeClass("active");
    $(this).addClass("active");
  });

  // zoom
  $(".product__detail-zoom-in")
    .on("mouseover", function () {
      $(this)
        .children(".photo")
        .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
    })
    .on("mouseout", function () {
      $(this).children(".photo").css({ transform: "scale(1)" });
    })
    .on("mousemove", function (e) {
      $(this)
        .children(".photo")
        .css({
          "transform-origin":
            ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
            "% " +
            ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
            "%",
        });
    });
  // click thay background
  $(".product-img-item ").click(function () {
    image = $(this).attr("data-image");
    //   console.log(image);
    $(".photo").css({ "background-image": "url(" + image + ")" });
  });

  // introduce mobile
  thoigian = setInterval(slide_introduce, 3000);
});

function slide_introduce() {
  var window_width = $("body").innerWidth();
  if (window_width < 1328) {
    var later_pos = $(".introduce-active").next();
    // console.log(later_pos);
    if (later_pos.length == 0) {
      $(".introduce-active")
        .addClass("to-left")
        .one("webkitAnimationEnd", function () {
          $(".to-left").removeClass("to-left");
        });
      $(".introduce .hide-on-mobile:first-child")
        .addClass("to-right")
        .one("webkitAnimationEnd", function () {
          $(".introduce-active").removeClass("introduce-active");
          $(".to-right").addClass("introduce-active").removeClass("to-right");
        });
    } else {
      $(".introduce-active")
        .addClass("to-left")
        .one("webkitAnimationEnd", function () {
          $(".introduce-active").removeClass("to-left");
        });
      later_pos.addClass("to-right").one("webkitAnimationEnd", function () {
        $(".introduce-active").removeClass("introduce-active");
        $(".to-right").addClass("introduce-active").removeClass("to-right");
      });
    }
  }
}
