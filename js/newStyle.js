window.alert = alert;
window.confirm = confirm;
window.prompt = prompt;
function alert(alertMsg) {
    alertMsg = alertMsg ? alertMsg  : '';

    var alertStr = `<div class="alertWrap">
        <div class="alert">
            <p class="alertCon">${alertMsg}</p>
            <button class="alertBtn">确定</button>
        </div>
    </div>`;
    $("body").append(alertStr);
    if(alertMsg.length > 12){
        $(".alert .alertCon").css("textAlign", "left");
    }
    $(".alertBtn").click(function(){
        $("body").children(".alertWrap").remove();
    });

    
}

// 需要传递callback //新增 外套p标签class：confirmBtnWrap
function confirm(confirmMsg, callback){
    confirmMsg = confirmMsg ? confirmMsg : '';
    var confirmStr = `<div class="confirmWrap">
        <div class="confirm">
            <p class="confirmCon">${confirmMsg}</p>
            <p class="confirmBtnWrap">
                <button class="cfSure confirmBtn">确定</button>
                <button class="cfCancel confirmBtn">取消</button>
            </p>
        </div>
    </div>`;
    $("body").append(confirmStr);
    if(confirmMsg.length > 12){
        $(".confirm .confirmCon").css("textAlign", "left");
    }
    $(".cfCancel").click(function(){
        callback(false);
        $("body").children(".confirmWrap").remove();
    });
    $(".cfSure").click(function(){
        callback(true);
        $("body").children(".confirmWrap").remove();
    });
}


// 需要传递callback
function prompt(promptTit, inputMsg, callback){
    var newInputMsg = '';
    promptTitil = promptTit ? promptTit  : '';
    
        var promptStr = `<div class="promptWrap">
            <div class="prompt">
                <p class="promptCon">${promptTitil}</p>
                <input type="text" id="inputMsg" placeholder="${inputMsg}" autofocus>
                <br/>
                <button class="pBtnSure promptBtn">确定</button>
                <button class="pBtnCancel promptBtn">取消</button>
            </div>
        </div>`;
    
        $("body").append(promptStr);
        $(".pBtnCancel").click(function(){
            callback(false);
            $("body").children(".promptWrap").remove();
        });
        $(".pBtnSure").click(function(){
            newInputMsg = $("#inputMsg").val();
            callback(newInputMsg);
            $("body").children(".promptWrap").remove();
        });
}

$(window).resize(function(){ 
    if(document.body.clientHeight<700){ 
    alert('“禁止缩放”'); 
    window.resizeTo(document.body.clientHeight,300); 
    } 
}); 
    