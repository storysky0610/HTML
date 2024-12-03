$(function(){
$(window).scroll(function () {
    var HH = $(window).scrollTop();
    if (HH < 100) {
        $('#top-bar').stop().animate({ top: '-65px' });
    }
    if (HH > 100) {
        $('#top-bar').stop().animate({ top: '0px' });
    
    }
})
})



$(window).scroll(function () {
    var HH = $(window).scrollTop();
    if (HH > 200) {
        $('#top-bar').stop(true, false).animate({ top: 0 }, 500)
    }else{
            $('#top-bar').stop().animate({ top:-65},500)
        
    }
})