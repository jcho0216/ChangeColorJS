let frm = document.frm;
let myId = frm.myId;
let pwd = frm.pwd;
let send_btn = document.frm.send;

send_btn.onclick = function(){
    let newId = myId.value;
    let newPwd = pwd.value;
    let pwd = frm.pwd;
    let send_btn = document.frm.send;

    if(newId== ""||newPwd == ""){
        alert('아이디 또는 비밀번호가 입력되지않았습니다!');
    }
    else{
        alert(myId.value + '님 환영합니다!');
    }

}



function put_text(){
    let frm = document.forms['frm']['text'];

    frm.value = '값을 입력';
}