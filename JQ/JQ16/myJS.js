$(function () {
    $('#M01').click(function (event) {
        $("html,body").stop(true, false).animate({ scrollTop: 0 }, 800); event.preventDefault();
    })
    $('#M02').click(function (event) {
        var tt = $('#BBB').offset().top;
        $("html,body").stop(true, false).animate({ scrollTop: tt }, 800); event.preventDefault();
    })
    $('#M03').click(function (event) {
        var tt = $('#CCC').offset().top;
        $("html,body").stop(true, false).animate({ scrollTop: tt }, 800); event.preventDefault();
    })
    $('#M04').click(function (event) {
        var tt = $('#DDD').offset().top;
        $("html,body").stop(true, false).animate({ scrollTop: tt }, 800); event.preventDefault();
    })

})

// $(function () {
//     $('#M01').click(function (event) {
//         $("html,body").stop(true, false).animate({ scrollTop: $('#BBB').offset().top }, 800);
//         event.preventDefault();
//     });
//     $('#M02').click(function (event) {
//         $("html,body").stop(true, false).animate({ scrollTop: $('#CCC').offset().top }, 800);
//         event.preventDefault();
//     });
//     $('#M03').click(function (event) {
//         $("html,body").stop(true, false).animate({ scrollTop: $('#DDD').offset().top }, 800);
//         event.preventDefault();
//     });
//     $('#M04').click(function (event) {
//         $("html,body").stop(true, false).animate({ scrollTop: $('#EEE').offset().top }, 800);
//         event.preventDefault();
//     });
// });

