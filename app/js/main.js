$(function () {


  // ! Добавление класса для текущей страницы
  var location = window.location.href;
  var cur_url = '/' + location.split('/').pop();

  $('.menu__item').each(function () {
    var link = $(this).find('a').attr('href');

    if (cur_url == link) {
      $(this).addClass('current');
    }
  });



  // ! Слайдер на странице Trade-in
  $('.interactive__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    asNavFor: '.interactive__top-slider',

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',
  });

  $('.interactive__top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.interactive__slider',
    fade: true,
    arrows: false,
    infinite: false,
  });


  // ! Hits slider
  $('.some-class').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: true,

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',

    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  // ! Product Tabs script
  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })



  // !Form styler script
  $('.filters__select').styler();
  $('.installment__select').styler();
  $('.installment__form-select').styler();
  $('.form-select__narrow').styler();
  $('.form-select__wide').styler();
  $('.register__select').styler();
  $('.choose__narrow').styler();
  $('.choose__wide').styler();
  $('.fill__select').styler();
  $('.commission__select').styler();
  $('.modal__select').styler();



  // ! Main slider
  $('.slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true
  });



  // !Slider Hits Syncing
  $('.slider-hits--top').slick({
    asNavFor: '.slider-hits--bottom',
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',

    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 761,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-hits--bottom').slick({
    asNavFor: '.slider-hits--top',
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 761,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // ! Switch product grid to list
  $('.shop-content__view-btn').on('click', function () {
    $('.shop-content__view-btn').removeClass('shop-content__view-btn--active');
    $(this).addClass('shop-content__view-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list');
    $('.pagination').addClass('pagination--list');
    // $('.shop-content__inner').addClass('shop-content__nogrid');
  })
  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list');
    $('.pagination').removeClass('pagination--list');
    // $('.shop-content__inner').removeClass('shop-content__nogrid');
  })



  // ! Filter price
  $('.filter-price__input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });


  $('.filter-price__sum-input').ionRangeSlider({
    min: 40000,
    max: 5000000,
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-price__sum-from').text(data.from);
      $('.filter-price__sum-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__sum-from').text(data.from);
      $('.filter-price__sum-to').text(data.to);
    },
  });


  $('.filter-price__days-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-price__days-from').text(data.from);
      $('.filter-price__days-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__days-from').text(data.from);
      $('.filter-price__days-to').text(data.to);
    },
  });


  $('.filter-price__period-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-price__period-from').text(data.from);
      $('.filter-price__period-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__period-from').text(data.from);
      $('.filter-price__period-to').text(data.to);
    },
  });


  $('.filter-price__contribution-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-price__contribution-from').text(data.from);
      $('.filter-price__contribution-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__contribution-from').text(data.from);
      $('.filter-price__contribution-to').text(data.to);
    },
  });


  $('.filter-range__period-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-range__period-from').text(data.from);
      $('.filter-range__period-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-range__period-from').text(data.from);
      $('.filter-range__period-to').text(data.to);
    },
  });


  $('.filter-range__contribution-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-range__contribution-from').text(data.from);
      $('.filter-range__contribution-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-range__contribution-from').text(data.from);
      $('.filter-range__contribution-to').text(data.to);
    },
  });


  $('.insurance-calc__month-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.insurance-calc__month-from').text(data.from);
      $('.insurance-calc__month-to').text(data.to);
    },
    onChange: function (data) {
      $('.insurance-calc__month-from').text(data.from);
      $('.insurance-calc__month-to').text(data.to);
    },
  });


  $('.insurance-calc__sum-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.insurance-calc__sum-from').text(data.from);
      $('.insurance-calc__sum-to').text(data.to);
    },
    onChange: function (data) {
      $('.insurance-calc__sum-from').text(data.from);
      $('.insurance-calc__sum-to').text(data.to);
    },
  });


  $('.modal-select__time-input').ionRangeSlider({
    prettify_enabled: true,
    step: 0.1,
    onStart: function (data) {
      $('.insurance-calc__time-from').text(data.from);
      $('.insurance-calc__time-to').text(data.to);
    },
    onChange: function (data) {
      $('.insurance-calc__time-from').text(data.from);
      $('.insurance-calc__time-to').text(data.to);
    },
  });



  // ! Stars rating
  $(".stars").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

  $(".stars-list").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

  $(".stars-product__details").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px",
    starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });




  // ! Button for adaptive menu
  $('.menu__btn').on('click', function () {
    $('.menu__list,.menu__btn').toggleClass('active');
  });

  // ! For brands menu
  $('.menu__link--brands').on('click', function () {
    $('.menu-brands').toggleClass('menu-brands--active');
  });




  // !Script for mixitup filter
  var mixer = mixitup('.brands__list');
  // const mix1 = document.querySelector('.brands__list');
  // const mix2 = document.querySelector('.design__list');

  // if(mix1){
  //   mixitup('.brands__list', {
  // 		selectors: {
  // 			control: '.filter1'
  // 		}
  // 	})
  // }

  // if(mix2){
  // 	mixitup('.design__list', {
  // 		selectors: {
  // 			control: '.filter2'
  // 		}
  // 	})
  // }


  // ! Partners slider
  $('.partners-slider__list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },

      {
        breakpoint: 851,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  });


  // ! FAQ

  jQuery(function ($) {

    $(".accordion-content").css("display", "none");


    $(".accordion-title").click(function () {

      $(".accordion-title").not(this).removeClass("open");

      $(".accordion-title").not(this).next().slideUp(300);

      $(this).toggleClass("open");

      $(this).next().slideToggle(300);
    });
  });




  jQuery(document).ready(function ($) {
    $('.menu__link--brands').hover(
      function () {
        $('.brands-drop', this).stop().slideDown(400);
      },
      function () {
        $('.brands-drop', this).stop().slideUp(400);
      }
    );
  });




  // ! WOWJS
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();




});