let input = document.getElementsByTagName('input');



let answer = document.getElementsByName('answer');


function result(){
    let num1 = document.getElementsByTagName('input')[0].value;
    let num2 = document.getElementsByTagName('input')[1].value;
    let num3 = document.getElementsByTagName('input')[2].value;
  
    
    if(parseInt(num1) + parseInt(num2) === parseInt(num3)){
        alert('정답입니다!');
    }
    else{
        alert('오답입니다!');
    }


}
