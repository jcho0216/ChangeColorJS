let inp = document.forms['cal'];
let input = inp.getElementsByTagName('input');
let cls_btn = document.getElementsByClassName('cls_btn')[0];
let result_btn = document.getElementsByClassName('result_btn')[0];


function calc(value){
    if(inp['result'].value == 0){
        inp['result'].value = '';
    }
    inp['result'].value += value;
}

function clr(){
    inp['result'].value = 0;
}

function my_result(){
    let result = document.forms['cal']['result'];
    let calc = eval(result.value);

    inp['result'].value = calc;
}

result_btn.onclick = function(){
    my_result();
}

cls_btn.onclick = function(){
    clr();
}

for(let i = 0; i < input.length;i++){
    if(input[i].value != '=' && input[i].value != 'clear'){
        input[i].onclick = function(){
            calc(this.value);
        }
    }
}


