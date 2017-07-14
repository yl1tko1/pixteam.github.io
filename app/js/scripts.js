 $(document).ready(function(){
   $('.slider').slick({
     autoplay: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     adaptiveHeight: true
   });

   $('.files').slick({
     autoplay: true,
     infinite: true,
     slidesToShow: 2,
     slidesToScroll: 2,
     dots: true
   });
 });
