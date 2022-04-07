
var loadelement = document.createElement('div');

var init = function(){
  if(document.readystate == 'loading'){
      createSpinner();
   
  } else {
    loadelement.remove();
  }
}
var createSpinner = function () {
    loadelement.id = '_loading';
    loadelement.innerHTML = '<img src="img/screenshot3.png" alt="M-loading" class="loading-image" /> <br/> <i class="icofont-spinner load-icon"></i>';
    document.body.appendChild(loadelement);
}

window.onload = init();

