function isOdd(num){
    if(num%2 === 0){
        document.write(num + "은" + "짝수입니다." + '<br>');
    }
    else    
    document.write(num + "은" + "홀수입니다.");

}


isOdd(30);
isOdd(25);

document.write('<br>' + '<br>' + '<br>');


let customer_age = [16, 45, 23, 70, 39];

document.write(customer_age.join('-'));
document.write('<br>');

//역순출력

document.write(customer_age.reverse() + '<br>');

//sort();
let names = ['Michael', 'Ellie', 'Alex', 'Tyler'];
var score = [5, 4, 2, 5, 9, 1];

document.write(names.sort() + '<br>');
document.write(score.sort(function(a, b){ return a - b;}) + '<br>');
 
document.write('<br>' + '<br>');
//concat()
let korea = ['seoul', 'daejeon', 'daegu', 'sejong'];
let japan = ['도쿄', '오사카', '고베'];

let world = korea.concat(japan);

document.write(korea + '<br>');
document.write(japan + '<br>');
document.write(world + '<br>');

document.write('<br>' + '<br>');
//첫번째 배열 추가, 삭제
let shift_korea = korea.shift();
document.write(shift_korea + '<br>');
document.write(korea + '<br>')

//unshift();
document.write('<br>');
korea.unshift('제주도');
document.write(korea);

//pop();    
document.write('<br>');
let pop_korea = korea.pop();
document.write(korea + '<br>');

