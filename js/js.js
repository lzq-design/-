$(window).load(function(){$(".loading").fadeOut()})  
$(function () {
echarts_4()
echarts_5()
	function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var option = {       
            grid: {
                    left: '0',
            		top: '30',
                    right: '0',
                    bottom: '10',
                    containLabel: true
                },
            legend: {

                    top: 0,
                    textStyle: {
                        color: "#000000",
                },

        itemWidth: 10,  // 设置宽度

        itemHeight: 10, // 设置高度

        },

        tooltip: {

            trigger: 'axis',

            axisPointer: { // 坐标轴指示器，坐标轴触发有效

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        xAxis: {

            type: 'category',

            data: ["春秋战国","秦汉","三国两晋","南北朝","隋唐","五代十国","宋元","明清"],

            axisTick: { //---坐标轴 刻度

                show: true, //---是否显示

            },

            axisLine: { //---坐标轴 轴线

                show: true, //---是否显示

                lineStyle: {

                    color: 'rgba(0, 0, 0, 0.31)',

                    width: 1,

                    type: 'dotted',

                },

            },

            axisLabel: {//X轴文字

                textStyle: {

                    fontSize: 10,

                    color: '#000000'

                },

            },

        },

        yAxis: {

            type: 'value',

            splitLine: {//分割线

                show: true,

                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    width: 1,
                    type: 'dotted'

                }

            },

            axisLabel: {//Y轴刻度值

                formatter: '{value}',

                textStyle: {

                    fontSize: 15,

                    color: '#fff'

                },

            },

            axisLine: { //---坐标轴 轴线

                show: false, //---是否显示

            },

        },

        series: [ {

            name: '人数',

            type: 'bar',

            data: [57,53,44,38,57,29,72,89],

            barWidth: 15, //柱图宽度
	
            itemStyle: {

                normal: { //设置颜色的渐变
            barBorderRadius: 50,
                    color: 'rgba(99, 88, 88, 0.48)',

                }

            },

        }]

    };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

const color = ['rgb(0, 0, 0)', 'rgb(0, 0, 0)']; //线条边框颜色



const legend = {
    //data，就是取得每个series里面的name属性。
    orient: 'vertical',
    icon: 'circle', //图例形状
    padding: 0,
    top: 10,
    right: 20,
    itemWidth: 10, //小圆点宽度
    itemHeight: 10, // 小圆点高度
    itemGap: 10, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
        fontSize: 12,
        color: 'rgba(57, 76, 140, 0.8)',
    },
};
const tooltip = {
    show: true,
};
const indicator = [
    {
        name: '医学',
        max: 110,
        color: '#000000',
    },
    {
        name: '农学',
        max: 110,
        color: '#000000',
    },
    {
        name: '天文学',
        max: 110,
        color: '#000000',
    },
    {
        name: '数学',
        max: 110,
        color: '#000000',
    },
    {
        name: '物理学',
        max: 110,
        color: '#000000',
    },
    {
        name: '地理学',
        max: 110,
        color: '#000000',
    },
    
];
const dataArr = [
    {
        
        value: [110, 60, 110, 76, 30, 74],
        symbolSize: 8,
        symbol: 'circle',

        lineStyle: {
            width: 2,
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 1, //上
                colorStops: [
                    {
                        offset: 0,
                        color: color[0],
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)',
                    },
                    {
                        offset: 1,
                        color: color[0],
                    },
                ],
                global: false,
            },
            opacity: 1, // 区域透明度
        },
    },
];

option = {
    color,
    legend,
    tooltip,
    radar: {
        center: ['50%', '50%'], //圆心坐标距离左边和上边的距离
        radius: ['1%', '75%'], //内外半径，不写默认是75%
        startAngle: 90, //可以旋转图形
        shape: 'polygon',
        axisName: {
            color: '#ffffff',
            fontSize: 10 ,
        },
        indicator: indicator,
        splitArea: {
            show: true, //默认显示颜色分割区域，不需要显示
        },
        axisLine: {
            show: true, //是否显示十字交叉线
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269', //线条颜色
            },
        },
        axisLabel: { show: false },
        splitLine: {
            //雷达一圈圈
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#113865', // 雷达一圈圈颜色分隔线颜色
                width: 1, // 分隔线线宽
            },
        },
    },
    series: [
        {
            type: 'radar',
            data: dataArr,
        },
    ],
};


        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









