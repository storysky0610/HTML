$(function () {
    $(".BANNER").hover(function () {
        $(this).find(".BOX").stop(true,false).show()
     }, function () {
        $(this).find(".BOX").stop(true,false).hide()
    })
})