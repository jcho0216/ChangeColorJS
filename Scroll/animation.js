$(window).on('scroll', function(){
    $('.nav-menu').css({background:'black', color:'white'})
});

// console.log($(window).scrollTop());

// $(window).on('scroll', function(){
//     if($(window).scrollTop() > 200){
//         $('.nav-menu').addClass('nav-black');
//         $('.nav-menu')
//     }
// })

console.log($(window).scrollTop());


$(window).on('scroll', function(){
    if($(window).scrollTop()>200){
      $('#nav-bar').addClass('nav-black');
    }
  })

$(window).on('scroll', function(){
    if($(window).scrollTop()>200){
        $('#small').addClass('show-menu-small');
    }
})

$(window).on('scroll', function(){
    if($(window).scrollTop()<200){
        $('#nav-bar').removeClass('nav-black');    
    }
})

$(window).on('scroll', function(){
    if($(window).scrollTop()<200){
        $('#small').removeClass('show-menu-small');
    }
})


$('#hi').on('click', function(){
    $('#hi').animate({marginLeft: '100px', marginTop:'100px'}, 2000)
}); 



$('#show-menu').on('click', function(){
    $('.left-menu').animate({marginLeft: '-7px'});
})