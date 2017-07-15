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
     dots: true,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite: true,
           dots: true
         }
       },
   {
     breakpoint: 768,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
       dots: true
     }
   }
 ]

   });

 $( "#zip" ).validate({
   rules: {
     code: {
       required: true
     }
   },
   messages: {
     code: {
       required: "",
     }
   },
   errorClass: 'is-valid'
 });

$('#map-form').validate({
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    email: {
      required: true
    }
  },
  messages: {
    name: {
      required: "",
    },
    email: {
      required: "",
    }
  },
  errorClass: 'is-valid'
});

 });
