let inp = document.forms['cals'];
let input = inp.getElementsByTagName('input');
let cls_btn = document.getElementsByClassName('cls_btn')[0];
let result_btn = document.getElementsByClassName('result_btn')[0];

for(let i = 0; i < input.length;i++){
    if(input[i].value != '=' && input[i].value != 'clear'){
        input[i].onclick = function(){
            cals(this.value);
        }
    }
}