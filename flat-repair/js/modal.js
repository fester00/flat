$(document).ready(function() {
  var button =$('#button');
  var modal= $('#modal');
  var close= $('#close');
  button.on('click',function () {
    modal.addClass ('modal_active')
  });
  close.on('click',function () {
    modal.removeClass('modal_active')
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
     
});