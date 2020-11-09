window.onload = function() {
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let display = document.getElementById("display");
    let startTime, timer;

    startButton.onclick = start;

    function start() {
        startButton.onclick = null;
        stopButton.onclick = stop;
        startTime = new Date();

        timer = setInterval(function(){
            let now = new Date;
            display.innerHTML = ((now - startTime)/1000).toFixed(2);
        }, 10);
    }

    function stop() {
        clearInterval(timer);
        startButton.onclick = start;
    }

};