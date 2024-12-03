$(".header h3").on("touchend click", AAA);
function AAA() {
    $(".header ul").show();
}

$(".header .close").on("touchend click", BBB);
function BBB() {
    $(".header ul").hide();
}

$(window).on("resize", CCC);
function CCC() {
    var N = $(window).width();
    if (N >= 768) {
        $(".header ul").show();
    } else { $(".header ul").hide(); }
}
