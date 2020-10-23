//getElementById();, querySelector();

let title = document.getElementById('title');

title.style.color = 'white';
title.style.background = 'orange';
title.innerHTML = "JavasScript로 문서를 조작";


let cssselector = document.querySelector('li');

cssselector.style.color = "yellow";
cssselector.style.background = "blue";


//ElementsByTagName();, getElementsByClassName();, querySelectorAll();

let li = document.getElementsByTagName('li');
li[1].style.color = "red";
li[1].style.background = "black"


function setColor(){
    let li2 = document.querySelectorAll("li");
    
    for(let i = 0; i < li.length ; i++){
        li2[i].style.color = "green";
        li2[i].style.backgroundColor = "orange";
    }

}
