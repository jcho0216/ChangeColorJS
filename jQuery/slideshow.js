var show = 1;

$('.slide-after').on('click', function(){
    if(show == 1){
        $('.slide-container').css('translate', 'translateX(-100vw)');
        show = show + 1;
    }
    else if(show == 2){
        $('.slide-container').css('transform', 'translateX(-200vw');
        show = show + 1;
    }
})

$('.slide-before').on('click', function(){
    if(show == 3){
        $('.slide-container').css('transform', 'translateX(-100vw');
        show = show -1;
    }else if(show == 2){
        $('.slide-container').css('transform', 'translateX(-100vw');
        show = show - 1;
    }
})

