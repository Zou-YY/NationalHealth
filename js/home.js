$(function(){
    // 轮播
    $(".kcxfz .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".keChiXu").css("display","block");
        },100)
    })
    $(".hxb .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".heXinBan").css("display","block");
        },100)
    })
    $(".yljk .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".yiLiaoJianKan").css("display","block");
        },100)
    })
    $(".hnzh .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".zongHe").css("display","block");
        },100)
    })
    $(".cqzh .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".zongHe").css("display","block");
        },100)
    })
    // 高亮
    $(".navAbs").click(function(){
        $(".navRel dt").css("color","#fff");
        $(".navAbs").css("color","#fff");
        $(this).css("color","#d00");
        $(this).parents("dl").find("dt").css("color","pink");
    })

    // 历史&情景
    var backStr = '<ul class="back"><li class="liShi">历史对比</li><li class="qingJing">情景模拟</li></ul>';
    $("#contect div a").append(backStr);
    $("#contect a .back").hover(function(){
        $(this).find(".liShi").animate({
            "top": "0"
        },200);
        $(this).find(".qingJing").animate({
            "top": "50%"
        },200);
    },function(){
        $(this).find(".liShi").animate({
            "top": "-50%"
        },200);
        $(this).find(".qingJing").animate({
            "top": "-50%"
        },200);
    })
    $(".qingJing").click(function(){
        window.location.href = "html/qingjing.html";
    })
    $(".liShi").click(function(){
        window.location.href = "html/lishidb.html";
    })
})
