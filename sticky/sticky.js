let sticky2 = document.getElementsByClassName('.sticky2');


$(window).scroll(function(){
    var height = $(window).scrollTop();
    console.log(height);

    var y = (-1/556) * height + 2700/556;
    $('.sticky2').eq(0).css('opacity',y);
    
})


$(window).scroll(function(){
    var height = $(window).scrollTop();
    
    var y = (-1/556) * height + 3100/556;
    $('.sticky2').eq(1).css('opacity',y);
})

