function changeColor(){
    let box = document.getElementById('box');
    box.setAttribute('class', 'box');

    let getAttr = box.getAttribute('class');
    alert(getAttr);



    //delete
    //box.removeAttribute('class');

 
}

function red(){
    let red = document.getElementById('box');
    red.style.background = "red";
}

function blue(){
    let blue = document.getElementById('box');

    blue.style.background = "blue";
}
