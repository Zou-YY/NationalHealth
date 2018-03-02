$(function(){
    // 验证码
    var verifyCode = new GVerify("vContainer");
    // 找回密码与用户注册
    $("#rePassWord").click(function(){
        $(this).css({"color": "#00fff0", "background": ''});
        $("#userReg").css({"color": "#fff", "background": 'rgba(33, 50, 112 , 0.8)'});
        $(".regInfo").css("display","none");
        $(".rePassInfo").css("display","block");
    });
    $("#userReg").click(function(){
        $(this).css({"color": "#00fff0", "background": ''});
        $("#rePassWord").css({"color": "#fff", "background": 'rgba(33, 50, 112 , 0.8)'});
        $(".rePassInfo").css("display","none");
        $(".regInfo").css("display","block");
    });

    // 显隐密码
    $(".info p u").click(function(){
        var $input = $(this).parent().children("input");
        if($input.attr("type") === "password"){
            $input.attr("type", "text");
            $(this).css("color", "#00fff0");
        }else{
            $input.attr("type", "password");
            $(this).css("color", "#fff");
        }
    });

    //  创建成功与修改密码成功弹出框
    $("#submit").on("click", function(){
        if($('#identifying').val() === ''){
            loading();
            return false;
         }else{
             var res = verifyCode.validate(document.getElementById("codeInput").value);
             if(res){
                 // alert("验证正确");
                //  console.log(verMsgCode);
             }else{
                 loading(); 
                return false;                         
             }
         }




        if($(".rePassInfo").css("display") === "block"){
            $(".regPopup p span").text("修改成功");
        }else{
            $(".regPopup p span").text("创建成功");
        }
        $(".regConWrap").css("display", "flex");
    });
    // 确定
    $(".popupSure").click(function(){
        $(".regConWrap").css("display", "none");
    });
     // 取消弹窗
    //  if($("#submit").css("cursor") === "not-allowed"){
    //     $("#submit").off();
    // }



     var spanSuccessStr  = `<span class="iconfont icon-duihao" style="color: #00fff0"></span>`;
     // 如果成功就在该成功的input的后面追加 $("#***").after(spanSuccessStr);
     $("p i").after(spanSuccessStr);
    // $("#userName").after(spanSuccessStr);
    // alert($(".icon-duihao").length);
     var existStr = `<span class="exist">用户名已存在</span>`;
     // 如果用户名存在就在 #userName 后面追加
     $("#userName").after(existStr).attr("exist", "true");

    //  用户名如果不存在
    $(".exist").remove();
    $("#userName").removeAttr("exist");    


     // 注册两次密码校验
     document.querySelector('#submit').addEventListener('click',function(){
         var $text1= document.querySelector('#passWord');
         var $text2= document.querySelector('#confirm');

         if($text2.value != $text1.value){
             $text2.setCustomValidity('两次输入密码不一致');
             $text2.value = '';
         }else{
             $text2.setCustomValidity('')
         }
     },false);

     // 找回密码两次密码校验
     document.querySelector('#rePassSubmit').addEventListener('click',function(){
         var $text1= document.querySelector('#rePassPassWord');
         var $text2= document.querySelector('#rePassConfirm');

         if($text2.value != $text1.value){
             $text2.setCustomValidity('两次输入密码不一致');
             $text2.value = '';
         }else{
             $text2.setCustomValidity('')
         }
     },false);

     


    //  正则验证
    var userNameRegExp = /^\w+$/;
    var nickNameRegExp = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
    var passWordRegExp = /^\w{6,16}$/;
    var callRegExp = /^1[34578]\d{9}$/;
    var eMailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    var regExpArr = [false, false, false, false, false, false];
    $("#userName").blur(function(){
        var $userNameStr = $(this).val();
        if(userNameRegExp.test($userNameStr)){
            $(this).parent("p").find(".hint").css("display","none");
            regExpArr[0] = true;
        }else{
            $(this).parent("p").find(".hint").css("display","block");
            regExpArr[0] = false;
        }
    });
    $("#nickName").blur(function(){
        var $nickNameStr = $(this).val();
        if(nickNameRegExp.test($nickNameStr)){
            $(this).parent("p").find(".hint").css("display","none");
            regExpArr[1] = true;
        }else{
            $(this).parent("p").find(".hint").css("display","block");
            regExpArr[1] = false;
        }
    });
    $("#passWord").blur(function(){
        var $passWordStr = $(this).val();
        if(passWordRegExp.test($passWordStr)){
            $(this).parent("p").find(".hint").css("display","none");
            regExpArr[2] = true;
        }else{
            $(this).parent("p").find(".hint").css("display","block");
            regExpArr[2] = false;
        }
    });
    $("#confirm").blur(function(){
        var $passWordStr = $("#passWord").val();
        if($passWordStr != ''){
            var $confirmStr = $(this).val();
            if($confirmStr === $passWordStr){
                $(this).parent("p").find(".hint").css("display","none");
                regExpArr[3] = true;
            }else{
                $(this).parent("p").find(".hint").css("display","block");
                regExpArr[3] = false;
            }
        }
    });
    $("#call").blur(function(){
        var $callStr = $(this).val();
        if(callRegExp.test($callStr)){
            $(this).parent("p").find(".hint").css("display","none");
            regExpArr[4] = true;
        }else{
            $(this).parent("p").find(".hint").css("display","block");
            regExpArr[4] = false;
        }
    });
    $("#eMail").blur(function(){
        var $eMailStr = $(this).val();
        if(eMailRegExp.test($eMailStr)){
            $(this).parent("p").find(".hint").css("display","none");
            regExpArr[5] = true;
        }else{
            $(this).parent("p").find(".hint").css("display","block");
            regExpArr[5] = false;
        }
    });
    // 注册正则验证结束


    // 按钮背景色
    $("#codeInput").focus(function(){
        for(var i = 0; i < regExpArr.length; i ++){
            if(regExpArr[i] == false){
                $("#submit").css({"cursor": "not-allowed", "opacity": 0.6}).attr("disabled","disabled");
            }else{
                $("#submit").css({"cursor": "pointer", "opacity": 1}).removeAttr("disabled");
            }
        }
     });
})

function loading() {
    $('body').loading({
        loadingWidth:240,
        title:'验证码错误',
        name:'test',
        discription:'这是一个描述...',
        direction:'row',
        type:'origin',
        originBg:'#71EA71',
        originDivWidth:0,
        originDivHeight:0,
        originWidth:0,
        originHeight:0,
        smallLoading:false,
        titleColor:'#213270',
        loadingBg:'#1870ca',
        loadingMaskBg:'rgba(22,22,22,0.2)'
    });

    setTimeout(function(){
        removeLoading('test');
    },1500);
}