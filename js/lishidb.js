$(function(){
    var lsdbBtnWrap = "";
    for(var i = 0; i < 9; i++){
        lsdbBtnWrap += `<li>服务业全要素生产率</li>`;
    }
    $(".lsdbBtnWrap").html(lsdbBtnWrap);
    $(".lsdbBtnWrap").on("click", "li", function(){
        $(".lsdbBtnWrap li").css("background","");
        $(this).css("background", "#0cc");
    });

    // 轮播
        // 按钮数组
    var lunBoBtnArr = ["电力生产", "煤炭生产", "煤炭消费", "石油生产", "石油消费", "天然气生产", "天然气消费"];
        // 图数组
    var ImgArr = [
        "../img/历史对比中模型原理图/能源/电力生产.jpg",
        "../img/历史对比中模型原理图/能源/煤炭生产.jpg",
        "../img/历史对比中模型原理图/能源/煤炭消费.jpg",
        "../img/历史对比中模型原理图/能源/石油生产.jpg",
        "../img/历史对比中模型原理图/能源/石油消费.jpg",
        "../img/历史对比中模型原理图/能源/天然气生产.jpg",
        "../img/历史对比中模型原理图/能源/天然气消费.jpg",
        "../img/历史对比中模型原理图/yingyang.png"
    ];

    var lunBoBtnStr = "";

    var preIndex = 0;
    for(var i = 0; i < 3; i ++){
        lunBoBtnStr += `<li index="${i}">${lunBoBtnArr[i]}</li>`;
    }
    $(".lunBoBtn").html(lunBoBtnStr);
    $(".smallImg li img").attr("src",ImgArr[preIndex]);
    $(".lunBoBtn li:first").css("background", "#0cc");
    $(".lunBoBtn").on("click", "li", function(){
        if(preIndex == $(this).attr("index")){
            return ;
        }
        preIndex = $(this).attr("index");
        $(".smallImg li img").fadeOut("normal",function(){
            $(this).attr("src",ImgArr[preIndex]).fadeIn("normal");
        })
        $(".bigImgWrap img").attr("src",ImgArr[preIndex]);
        $(".lunBoBtn li").css("background", "");
        $(this).css("background", "#0cc");
    })
    
    // 大图显隐
    $(".mgfBtn").click(function(){
        $(".bigImgMask").css("display","block");
        $(".bigImgWrap").show("slow");
    });
    $(".bigImgMask").click(function(){
        $(this).css("display","none");
        $(".bigImgWrap").hide("slow");
    });
    $(".bigImgWrap .closeBtn").click(function(){
        $(".bigImgMask").css("display","none");
        $(".bigImgWrap").hide("slow");
    });
    // 轮播结束

    // ECharts
    var myChart = echarts.init(document.getElementById('lsMain'));
    
        // 指定图表的配置项和数据
        var option = {
            xAxis: {
                type: 'category',
                data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021'],
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisTick: {
                    alignWithLabel: true,
                    inside: true
                },
                axisLabel: {
                    interval: 0,
                    fontSize: '2.625vw'
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#6885c2'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [
                {
                    name: '历史数据',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 10,
                    data: [0.39, 0.49, 0.55, 1.61, 1.79, 1.23, 1.39, 1.58, 1.88, 1.96, 1.72, 1.39, 1.41, 1.51, 1.67, 1.76, 1.81, 1.96, 1.46, 1.52, 1.67, 1.44]
                },
                {
                    name: '模型模拟',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 10,
                    data: [0.79, 0.69, 0.65, 1.61, 1.79, 1.63, 1.59, 1.58, 1.58, 1.56, 1.62, 1.59, 1.61, 1.61, 1.67, 1.76, 1.81, 1.76, 1.76, 1.72, 1.67, 1.64]
                }
            ],
            color: ['#04b0db', '#fbac21'],
            toolbox:{
                show: true
            }
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // 窗口自适应
        $(window).resize(function(){
            myChart.resize();
        });


    //  点击切换折线、柱状图
    $("#barBtn").click(function(){
        $(".lsTableWrap").css("display","none");
        $(".lsDataChart").css("display", "block");        
        $(".lineStyle").css("display","block");
        for(var i = 0; i < option.series.length; i ++){
            option.series[i].type = 'bar';
        }
        myChart.setOption(option);
    });
    $("#lineBtn").click(function(){
        $(".lsTableWrap").css("display","none");
        $(".lsDataChart").css("display", "block");                
        $(".lineStyle").css("display","block");
        for(var i = 0; i < option.series.length; i ++){
            option.series[i].type = 'line';
        }
        myChart.setOption(option);
    });
    $(".switchBtn").on("click", "button", function(){
        $(".switchBtn button").css("background","#00b1e5");
        $(this).css("background","#0cc");
    });

    // 切换 表格
    $("#formBtn").click(function(){
        $(".lsDataChart").css("display", "none");
        $(".lineStyle").css("display","none");        
        $(".lsTableWrap").css("display", "block");
    });

    // 表格数据
    var yearArr = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021'];
    var populationArr = [0.79, 0.69, 0.65, 1.61, 1.79, 1.63, 1.59, 1.58, 1.58, 1.56, 1.62, 1.59, 1.61, 1.61, 1.67, 1.76, 1.81, 1.76, 1.76, 1.72, 1.67, 1.64];
    
    var tableStr = '';
    for(var i = 0; i < yearArr.length; i ++){
        tableStr += `<tr>
            <td>${yearArr[i]}</td>
            <td>${populationArr[i]}</td>
        </tr>`;
    }
    if(yearArr.length >= 13){
        $(".lsConRight .dataTable").css("width", "calc(67vw + 15px)");
    }
    $(".dTab tbody").html(tableStr);
})