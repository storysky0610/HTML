$(function () {
    $("#RRR").click(function () {
        $("#KIDS").animate({left:1000},800,"easeOutBounce")
    })

    $("#LLL").click(function () {
        $("#KIDS").animate({ left: 0 }, 800, "easeOutBounce")
    })
})