let indicator = document.querySelectorAll('.indicator button');
let lightbox = document.querySelector('#lightbox');
let block = document.querySelector('#block');

function lightbox_open(num){
    lightbox.setAttribute('class', 'active');
    block.setAttribute('class', 'active');
}

function lightbox_open(num){
    lightbox.setAttribute('class', 'active');
    block.setAttribute('class', 'active');
    change_img(num);
    indicator[num-1].focus();
}

function lightbox_close(){
    lightbox.removeAttribute('class');
    block.removeAttribute('class');
}


