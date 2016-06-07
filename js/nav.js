// JavaScript Document
var ind = 0;
$(function(){
    var nav = $(".navbar");
    var init = $(".navbar .m").eq(ind);
    var block = $(".navbar .block");
    block.css({
        "left": init.position().left - 3
    });
    nav.hover(function() {},
    function() {
        block.stop().animate({
            "left": init.position().left - 3
        },
        100);
    });
    $(".navbar").slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: ind,
        startFun: function(i, c, s, tit) {
            block.stop().animate({
                "left": tit.eq(i).position().left - 3
            },
            100);
        }
    });
});