
$(function () {
    
$(".header h3").on("touchend click", AAA);
function AAA() {
    $(".header ul").show();
}



$(window).on("resize", CCC);
function CCC() {
    var N = $(window).width();
    if (N >= 768) {
        $(".header ul").show();
    } else { $(".header ul").hide(); }
}



})


