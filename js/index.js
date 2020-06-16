$(function () {
  $("#carouselExampleIndicators").carousel({
    interval: 0,
  });

  // $(".carousel__product-item").slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: false,
  //   dots: false,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 730,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // });

  $(".recently-slider, .best-seller-slider, .related-slider").slick({
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    prevArrow: '<button class="slick-prev fa fa-angle-left"></button>',
    nextArrow: '<button class="slick-next fa fa-angle-right"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          prevArrow:
            '<button class="slick-prev fa fa-angle-left" hidden></button>',
          nextArrow:
            '<button class="slick-next fa fa-angle-right" hidden></button>',
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".product__detail-slide").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button class="slick-prev fa fa-angle-left"></button>',
    nextArrow: '<button class="slick-next fa fa-angle-right"></button>',
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow:
            '<button class="slick-prev fa fa-angle-left" hidden></button>',
          nextArrow:
            '<button class="slick-next fa fa-angle-right" hidden></button>',
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // $(".slick-slider .slick-prev").html('<i class="fa fa-angle-left"></i>');
  // $(".slick-slider .slick-next").html("");

  // cart
  $(".header__cart-wrap").click(function () {
    $(".modal").addClass("showModal");
    $(".modal__body").removeClass("display");
  });

  $(".product__item-addcart, .add_cart-button").click(function (event) {
    event.preventDefault();
    $(".modal").addClass("showModal");
    $(".modal__body").removeClass("display");
  });

  $(".icon-close, .modal__overlay, .cart__empty-return").click(function () {
    $(".modal__body").addClass("display");
    $(".modal").removeClass("showModal");
  });

  $(".header__navbar-item").click(function () {
    title_menu = $(this).children(".header__navbar-name").text();
    // console.log(title_menu);
    $(this).parent().prev().find(".menu2-title").text(title_menu);
    $(this).children(".navbar-menu2").addClass("menu2-display");
    $(".go-back-menu").removeClass("hidden");
  });

  $(".navbar__toggle").click(function () {
    $(".header__navbar-content").addClass("navbar-on-mobile");
    $(".modal").addClass("showModal");
    $(".go-back-menu").addClass("hidden");
    $(".icon-close").addClass("hide-on-mobile");
  });

  $(".modal__overlay, .close-menu").click(function () {
    $(".header__navbar-content").removeClass("navbar-on-mobile");
    $(".modal").removeClass("showModal");
    $(".navbar-menu2").removeClass("menu2-display");
    $(".icon-close").removeClass("hide-on-mobile");
    $(".menu2-title").text("Browser Category");
  });

  $(".go-back-menu").click(function () {
    $(this)
      .parent()
      .next()
      .children()
      .find(".navbar-menu2")
      .removeClass("menu2-display");
    $(this).addClass("hidden");
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

  

  // click thay background
  $(".detail-product__item-img ").click(function () {
    image = $(this).attr("data-image");
    //   console.log(image);
    $(".photo").css({ "background-image": "url(" + image + ")" });
  });

  $(".product__detail-zoom-in")
    // tile mouse actions
    .on("mouseover", function () {
      $(this)
        .children(".photo")
        .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
    })
    .on("mouseout", function () {
      $(this).children(".photo").css({ transform: "scale(1)" });
    })
    .on("mousemove", function (e) {
      // console.log($(this).children('.photo'))
      $(this)
        .children(".photo")
        .css({
          "transform-origin":
            ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
            "% " +
            ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
            "%",
        });
    })
    // tiles set up
    .each(function () {
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        // set up a background image for each tile based on data-image attribute
        .children(".photo")
        .css({ "background-image": "url(" + $(this).attr("data-image") + ")" });
    });

  //tab title click
  $("li.tab-title h2").click(function () {
    var index = $(this).parent().index() + 1;
    // console.log(index)
    $("li.tab-title.active").removeClass("active");
    $(".tab-content ").addClass('display-none').removeClass('display-block');
    $(this).parent().addClass("active");
    var tab_content = ".tab-content:nth-child(" + index + ")" ;
    $(tab_content).removeClass('display-none').addClass('display-block');
  });

  $(".tab-content h2").click(function (event) {
    /* Act on the event */
    var index = $(".rotate").parent().parent().index();
    console.log(index);
    if ($(this).parent().index() == index) {
      $(this).find("i").removeClass("rotate");
      $(this).next().slideUp(500);
    }
    else{
      var tab_content = ".tab-content:nth-child(" + (index+1) + ")";
      $(tab_content).children().find('i').removeClass('rotate');
      $(tab_content).find('h2').next().slideUp(500);
      $(this).find("i").addClass("rotate");
      $(this).next().slideDown(500);
    }
    

    // $('html,body').animate({scrollTop: $(this).offset().top},1400);
  });

  // $("h2.tieude").click(function (event) {
  //   /* Act on the event */
  //   $(this).toggleClass("quaynguoc");
  //   $(this).next().slideToggle(800);
  //   // $('html,body').animate({scrollTop: $(this).offset().top},1400);
  // });

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
