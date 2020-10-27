let title = document.getElementById('title');
let list = document.getElementById('list');
let li = document.getElementsByTagName('li');

let addBtn = document.getElementById('add-btn');


for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click', activeItem);
}

function activeItem(){
    title.innerHTML = this.innerText;
    this.setAttribute('class', 'active');
}

addBtn.addEventListener('click', function(){
    let txt = prompt('제목이름');
    list.innerHTML +='<li>' + txt +'</li>'
});

