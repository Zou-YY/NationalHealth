$(function(){
    // 方案列表
    var fangAnStr = "";
    for(var i = 1; i <= 20; i++){
        fangAnStr += `<p class="fItem">
            <input type="checkbox" name="fangAn${i}" id="fangAn${i}">
            <label for="fangAn${i}">方案${i}</label>
            <i class="del">X</i>
        </p>`
    }
    $(".fangAn").html(fangAnStr);
    // 编辑按钮功能
    $(".edit").click(function(){
        if($(this).val() === "完成"){
            $(".fangAnWrap").css("overflow","hidden");
            $(this).val("编辑");
            $(".fItem input").attr("disabled",false);
            $(".fItem label").off();
        }else{
            $(".fangAnWrap").css("overflow","visible");
            $(this).val("完成");
            $(".fItem input").attr("disabled","disabled");
            $(".fItem label").dblclick(function(){
                var oldName = $(this).text();
                var $that = $(this);
                var fNameStr = prompt("请输入新的方案名：", oldName, function(msg){
                    console.log(msg);
                    if(msg){
                        $that.text(msg);
                    }
                });
            });
        }
        $(".del").toggle();
    });
    // 删除
    $(".del").click(function(){
        confirm("是否删除？",function(msg){
            console.log(msg);
        });
        // $(this).parents(".fItem").remove();
    });
    // 更多方案
    $(".fangAnWrap .more").click(function(){
        if($(".fangAnWrap").css("overflow") === "hidden"){
            $(".fangAnWrap").css("overflow","visible");
        }else{
            $(".fangAnWrap").css("overflow","hidden");
        }
    });
    // 政策变量按钮列表
    var blBtnStr = "";
    for(var i = 0; i <= 5; i ++){
        blBtnStr += `<li>服务业全要素生产率</li>`;
    }
    $(".blBtnWrap").html(blBtnStr);
    $(".blBtnWrap").on("click","li",function(){
        $(".blBtnWrap li").css("background","#00b1e5");
        $(this).css("background","#0cc");
    });

    // 放大
    $(".mgfBtn").click(function(){
        $(".mask").css("display","block");
        $(".bigPic").show("slow");
    })
    $(".close").click(function(){
        $(".mask").css("display","none");
        $(".bigPic").hide("slow");
    })
    $(".mask").click(function(){
        $(".mask").css("display","none");
        $(".bigPic").hide("slow");
    });

    $(".imgMask").on("click","li",function(){
        alert($(this).text());
    })

    

    // 保存按钮功能
    $(".save").click(function(){
        $(".tcMask").css("display","block").unbind();
        $(".saveTc").css("display","block");
    });
    // 保存弹窗
    $(".tcClose").click(function(){
        $(".tcMask").css("display","none");
        $(".saveTc").css("display","none");
    });
    $(".tcBtnWrap").on("click","button",function(){
        $(".tcMask").css("display","none");
        $(".saveTc").css("display","none");
    });

    // 数据导入 
    $("#dataImport").click(function(){
        $(".importMask").css("display","block");
    });
    // 关闭
    $("#fileCancel").click(function(){
        $(".importMask").css("display","none");
    });

    // 数据导出
    $("#dataExport").click(function(){
        $(".exportMask").css("display","block");
    })
    $(".expCancel").click(function(){
        $(".exportMask").css("display","none");
    })


    // ECharts表
    var myChart = echarts.init(document.getElementById('main'));
    
            // 指定图表的配置项和数据
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021'],
                    axisTick: {
                        alignWithLabel: true,
                        inside: true
                    }
                },
                yAxis: {
                    type: 'value'
                },
                tooltip: {
                    trigger: 'axis'
                },
                series: [
                    {
                        data: [0.79, 0.69, 0.65, 1.61, 1.79, 1.63, 1.59, 1.58, 1.58, 1.56, 1.62, 1.59, 1.61, 1.61, 1.67, 1.76, 1.81, 1.76, 1.76, 1.72, 1.67, 1.64],
                        type: 'line',
                        color: '#04b0db'
                    },
                    {
                        data: [0.39, 0.49, 0.55, 1.61, 1.79, 1.23, 1.39, 1.58, 1.88, 1.96, 1.72, 1.39, 1.41, 1.51, 1.67, 1.76, 1.81, 1.96, 1.46, 1.52, 1.67, 1.44],
                        type: 'line',
                        color: '#fbac21'
                    }
                ]
            };
    
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

            // 窗口自适应
        $(window).resize(function(){
            myChart.resize();
        });

        //  点击切换折线、柱状图
        $("#barBtn").click(function(){
            $(".tableWrap").css("display","none");
            $(".fList").css("display","block");            
            $(".dataChart").css("display","block");
            for(var i = 0; i < option.series.length; i ++){
                option.series[i].type = 'bar';
            }
            myChart.setOption(option);
        });
        $("#lineBtn").click(function(){
            $(".tableWrap").css("display","none");
            $(".fList").css("display","block");                        
            $(".dataChart").css("display","block");
            for(var i = 0; i < option.series.length; i ++){
                option.series[i].type = 'line';
            }
            myChart.setOption(option);
        });
        $(".chBtn").on("click", "button", function(){
            $(".chBtn button").css("background","#00b1e5");
            $(this).css("background","#0cc");
        })
        
        // 表格
        var yearArr = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021'];
        var populationArr = [0.79, 0.69, 0.65, 1.61, 1.79, 1.63, 1.59, 1.58, 1.58, 1.56, 1.62, 1.59, 1.61, 1.61, 1.67, 1.76, 1.81, 1.76, 1.76, 1.72, 1.67, 1.64];
        
        var tableStr = '';
        for(var i = 0; i < yearArr.length; i ++){
            tableStr += `<tr>
                <td>${yearArr[i]}</td>
                <td>${populationArr[i]}</td>
            </tr>`;
        }
        if(yearArr.length >= 10){
            $(".conRight .dataTable").css("width", "calc(68vw + 15px)");
        }
        $(".dTab tbody").html(tableStr);
        $("#formBtn").click(function(){
            $(".dataChart").css("display","none");
            $(".tableWrap").css("display","block");
            $(".fList").css("display","none");
        });


        // 下拉框
        $('#boxscroll').niceScroll({
            cursorcolor: "#122a3b", //滚动条的颜色   
            cursoropacitymax: 0.5, //滚动条的透明度，从0-1   
            touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备   
            cursorwidth: "0.5vw", //滚动条的宽度   
            cursorborder: "0", // 游标边框css定义    
            cursorborderradius: "0.3125vw", //以像素为光标边界半径  圆角   
            autohidemode: true, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条   
            zindex: "auto", //给滚动条设置z-index值    
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            }, //滚动条的位置
        });
        $(".selTop").click(function(){
            $("#boxscroll").css("display", "block");
        });
        $(".options li").click(function(){
            $(".options li").css("color", "#fff")
            $(this).css("color", "#0cc");
            $(".select").html($(this).html());
            $("#boxscroll").css("display", "none");

            // alert
            alert($(".select").text());
        });
        

        $("#boxscroll").mouseleave(function(){
            $(this).css("display", "none");
        });
        // 下拉框结束
})



// loading
function loading() {
    $('body').loading({
        loadingWidth:240,
        title:'请稍等!',
        name:'test',
        discription:'描述描述描述描述',
        direction:'column',
        type:'origin',
        // originBg:'#71EA71',
        originDivWidth:40,
        originDivHeight:40,
        originWidth:6,
        originHeight:6,
        smallLoading:false,
        loadingMaskBg:'rgba(0,0,0,0.2)'
    });

    setTimeout(function(){
        removeLoading('test');
    },3000);
}

