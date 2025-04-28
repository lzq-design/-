$(function () {
    fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
        .then(response => response.json())
        .then(geoJSON => {
            // 注册地图数据
            echarts.registerMap('China', geoJSON);
            // 名称标准化映射
            const nameMapping = {
                '北京': '北京市',
                '天津': '天津市',
                '河北': '河北省',
                '山西': '山西省',
                '内蒙古': '内蒙古自治区',
                '辽宁': '辽宁省',
                '吉林': '吉林省',
                '黑龙江': '黑龙江省',
                '上海': '上海市',
                '江苏': '江苏省',
                '浙江': '浙江省',
                '安徽': '安徽省',
                '福建': '福建省',
                '江西': '江西省',
                '山东': '山东省',
                '河南': '河南省',
                '湖北': '湖北省',
                '湖南': '湖南省',
                '广东': '广东省',
                '广西': '广西壮族自治区',
                '海南': '海南省',
                '重庆': '重庆市',
                '四川': '四川省',
                '贵州': '贵州省',
                '云南': '云南省',
                '西藏': '西藏自治区',
                '陕西': '陕西省',
                '甘肃': '甘肃省',
                '青海': '青海省',
                '宁夏': '宁夏回族自治区',
                '新疆': '新疆维吾尔自治区',
                '台湾': '台湾省',
                '香港': '香港特别行政区',
                '澳门': '澳门特别行政区'
            };
            // 数据适配（保留完整省份名称）
            let dataList = [
                { name: '北京市', value: 5 },
                { name: '天津市', value: 0 },
                { name: '河北省', value: 45 },
                { name: '山西省', value: 14 },
                { name: '内蒙古自治区', value: 1 },
                { name: '辽宁省', value: 0 },
                { name: '吉林省', value: 0 },
                { name: '黑龙江省', value: 0 },
                { name: '上海市', value: 9 },
                { name: '江苏省', value: 47 },
                { name: '浙江省', value: 42 },
                { name: '安徽省', value: 16 },
                { name: '福建省', value: 11 },
                { name: '江西省', value: 16 },
                { name: '山东省', value: 39 },
                { name: '河南省', value: 59 },
                { name: '湖北省', value: 12 },
                { name: '湖南省', value: 5 },
                { name: '广东省', value: 3 },
                { name: '广西壮族自治区', value: 0 },
                { name: '海南省', value: 0 },
                { name: '重庆市', value: 0 },
                { name: '四川省', value: 12 },
                { name: '贵州省', value: 0 },
                { name: '云南省', value: 1 },
                { name: '西藏自治区', value: 0 },
                { name: '陕西省', value: 34 },
                { name: '甘肃省', value: 3 },
                { name: '青海省', value: 0 },
                { name: '宁夏回族自治区', value: 0 },
                { name: '新疆维吾尔自治区', value: 1 },
                { name: '台湾省', value: 0 },
                { name: '香港特别行政区', value: 0 },
                { name: '澳门特别行政区', value: 0 }
            ].map(item => ({
                ...item,
                name: nameMapping[item.name.replace(/(省|市|自治区|特别行政区|壮族自治区|回族自治区|维吾尔自治区)$/, '')] || item.name
            }));

            // 初始化图表
            const myChart = echarts.init(document.getElementById('map'));
            const maxValue = Math.max(...dataList.map(d => d.value));

            // 创建信息展示容器（需要配合HTML中的<div id="infoBox">）
            const infoBox = document.getElementById('infoBox');

            // 整合后的option配置
            const option = {
                title: {
                    text: '古代自然科学家分布数量',
                    subtext: '来源：高德软件 GS京(2022)1061号',
                    textStyle: {
                        color: '#333',
                        fontSize: 21
                    },
                    left: 'center',
                    top: 20
                },
                tooltip: {
                    trigger: 'item',
                    padding: 0,
                    borderWidth: 0,
                    formatter: function (params) {
                        return `<div class="tooltip-area">
                            <p>${params.marker}${params.name}</p>
                            <h4>数量：${params.value || 0}</h4>
                        </div>`;
                    }
                },
                visualMap: {
                    min: 0,
                    max: maxValue,
                    left: 20,
                    bottom: 40,
                    text: ['高', '低'],
                    inRange: {
                        color: ['#C0C0C0', '#777777', '#4A4A4A', '#363636']
                    },
                    outOfRange: {
                        color: ['rgba(157, 151, 151, 0.8)']
                    },
                    textStyle: {
                        color: '#666'
                    }
                },
                geo: {
                    map: 'China',
                    roam: false,
                    scaleLimit: { min: 0, max: 1 },
                    zoom: 1.13,
                    top: 100,
                    label: {
                        show: true,
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.61)',
                        formatter: (params) => params.name.replace(/(省|市|自治区|特别行政区)/, '')
                    },
                    itemStyle: {
                        borderColor: 'rgba(10, 32, 53, 0.18)',
                        borderWidth: 0.6
                    }
                },
                series: [{
                    type: 'map',
                    mapType: 'China',
                    data: dataList,
                    geoIndex: 0,
                    roam: false,
                    emphasis: {
                        label: {
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        },
                        itemStyle: {
                            areaColor: '#666'
                        }
                    },
                    regions: [{
                        name: '南海诸岛',
                        itemStyle: {
                            areaColor: 'transparent',
                            borderColor: '#ffffff'
                        },
                        layoutCenter: ['82%', '86%'],
                        layoutSize: '18%'
                    }]
                }]
            };

            // 设置选项
            myChart.setOption(option);

            // 点击事件处理
            myChart.on('click', (params) => {
                const clickedData = dataList.find(item => item.name === params.name) || { value: 0 };
                infoBox.innerHTML = `
                    <div style="padding:15px;background:#fff;box-shadow:0 2px 12px rgba(0,0,0,0.1)">
                        <h3 style="margin:0 0 10px;color:#333">${params.name}</h3>
                        <div style="display:flex;align-items:center">
                            <span style="display:inline-block;width:12px;height:12px;background:${params.color};margin-right:8px"></span>
                            <span style="font-size:16px;color:#666">
                                科学家数量：<b style="color:#222;font-size:20px">${clickedData.value}</b>
                            </span>
                        </div>
                    </div>`;
            });

            // 窗口自适应
            window.addEventListener('resize', () => myChart.resize());
        })
        .catch(error => {
            console.error('数据加载失败:', error);
            document.getElementById('map').innerHTML = '<p style="color:red;text-align:center">地图加载失败，请刷新页面</p>';
        });
});