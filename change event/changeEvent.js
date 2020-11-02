$('#option1').on('change', function(){
    if($('#option1').val()=='셔츠'){
        $('.size-select').show();
        $('.size-select-pants').hide();
    }
})

$('#option1').on('change', function(){
    if($('#option1').val()=='모자'){
        $('.size-select').hide();
    }
})

$('#option1').on('change', function(){
    if($('#option1').val()=='바지'){
        $('.size-select-pants').show();
        $('.size-select').hide();
    }
})

$('#option1').on('change', function(){
    if($('#option1').val()=='모자'){
        $('.size-select-pants').hide();
    }
})

//append();함수로 표현
// $('#option1').on('change', function(){
//     if($('#option1').val()=='셔츠'){
//         $('.size-select').show();
//         var tmp = `<option>95</option>
//                 <option>100</option>
//                 <option>105</option>`;

//                 $('#option2').append(tmp);
//     }
// })


//html(); 함수로 표현
// $('#option1').on('change', function(){
//     if($('#option').val()=='셔츠'){
//         $('.size-select').show();
//         $('#option2').html('');
//         var tmp = `<option>95</option>
//         <option>100</option>
//         <option>105</option>
//         `;

//         $('#option2').append(tmp);
//     }
// })
