$(document).ready(function() {
  var button =$('#button');
  var modal= $('#modal');
  var modal2= $('#modal2');
  var close= $('#close');
  var close2= $('#close2');
  button.on('click',function () {
    modal.addClass ('modal_active')
  });
  close.on('click',function () {
    modal.removeClass('modal_active')
  
  });
  close2.on('click',function () {
    modal2.removeClass('modal_active')
  
  });
  $(window).scroll(function() {
 
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},800);
     
    });
    new WOW().init();
    
    $('#form').validate({
      errorClass: "invalid",
      focusInvalid: false,
      errorElement: "div",
      rules: {
        phone: {
          required: true,
          
        },
        email: {
          required: true,
          email: true
        },
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        }
      },
        messages: {
          username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Минимум символов: {2}")
          },
          phone: {
          required:  "Заполните поле",
          
          },
          email: {
          required:  "укажите Ваш Email",
          email: jQuery.validator.format("Введите корректный email")
          }
          
        }
      }
    );
    $('#form2').validate({
      errorClass: "invalid",
      focusInvalid: false,
      errorElement: "div",
      rules: {
        phone: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        }
      },
      messages: {
          username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Минимум символов: {2}")
          },
          phone: {
          required:  "Заполните поле",
          
          },
          email: {
          required:  "укажите Ваш Email",
          email: jQuery.validator.format("Введите корректный email")
          }
          
        }
      }
    );
    $('#form3').validate({
      errorClass: "invalid",
      focusInvalid: false,
      errorElement: "div",
      rules: {
        phone: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        }
      },
      messages: {
          username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Минимум символов: {2}")
          },
          phone: {
          required:  "Заполните поле",
          
          },
          email: {
          required:  "укажите Ваш Email",
          email: jQuery.validator.format("Введите корректный email")
          }
          
        }
      }
    );
    $('.phone').mask('8 (999) 999-99-99');
    $('.offer__form').on('submit', function name(event){
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
        success: function (response) {
          console.log('pribili dannie:'+response);
          $('.offer__form')[0].reset();
          
          $('.result').text('Спасибо за заявку, скоро мы вам перезвоним.');
        },
          error: function(jqXHR, textStatus,errorThrown){
            console.log(jqXHR + "" + textStatus )
          }
      });
    })
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.arrows__left'),
      nextArrow: $('.arrows__right'),
      responsive: [
      {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      
    }
  },
 
      ]
    });
     
});