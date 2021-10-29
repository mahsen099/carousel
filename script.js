$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1
      }
    }
  ]
});

// vertical-comp
$('.vertical-comp').slick({
dots: false,
infinite: false,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      infinite: false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1
    }
  }
]
});
// infinite scroll slide
$('.infinite-slider').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    }
  }
]
});
// alternate arrow
$('.scroll').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span class="prev_arrow"><i class="fas fa-chevron-left fa-2x"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right fa-2x"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1
      }
    }
  ]
});
// slider-one
$('.slider-one').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});

//slide-comp 

$('.slide-comp').slick({
infinite: true,
speed: 300,
slidesToShow: 1,
prevArrow: '<span class="prev_arrow"><i class="fas fa-chevron-left fa-2x"></i></span>',
nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right fa-2x"></i></span>',
});


$('.slider').slick({
infinite: false,
slidesToShow: 1,
slidesToScroll: 1
});
$('.vertical-comp').slick({
infinite: false,
slidesToShow: 1,
slidesToScroll: 1
});
$('.infinite-slider').slick({
infinite: false,
slidesToShow: 1,
slidesToScroll: 1
});
$('.scroll').slick({
infinite: false,
slidesToShow: 1,
slidesToScroll: 1
});
$('.slider-one').slick({
infinite: false,
slidesToShow: 1,
slidesToScroll: 1
});
$('.slide-comp').slick({
infinite: false,
slidesToShow: 1,
slidesToScroll: 1
});