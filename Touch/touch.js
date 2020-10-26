let box = document.getElementById('box');

let touch = {
    start: function(){
        box.innerHTML = '나를 건드렸군요!';
        this.style.background = "red";
    },
    

    end: function(e){
    box.innerHTML = '손을 떼었군요!';
    this.style.background = '';
    
    },

    move: function(e) {
    box.innerHTML = '만지는 중입니다.';
    this.style.background = 'yellow';    
}
}

box.addEventListener('touchstart', touch.start);
box.addEventListener('touchend', touch.end);
box.addEventListener('touchmove', touch.move);
