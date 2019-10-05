var button = document.querySelector('#button');
var modal =document.querySelector('#modal');
var close =document.querySelector('#close');

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
  setTimeout(closeWindow, 5000)
});
close.addEventListener('click', function(){
  
  modal.classList.remove('modal_active');
  
});
function closeWindow() {
  if (modal.classList='modal_active') {
    modal.classList='modal';
    
  }
}

