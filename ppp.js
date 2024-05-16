$(document).ready(function(){
  $('.card-slider').slick({
    slidesToShow: 3, // Jumlah card yang ditampilkan pada setiap slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Kecepatan perpindahan slide (dalam milidetik)
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
