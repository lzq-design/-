
//   右
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".youtu1  .chart"));


  option = {
      // backgroundColor: "#1a4377",
      title: {
          text: '',
          textStyle: {
            color: 'white',
            fontSize: "0.25rem",
          },
          top:"110px",
        },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      color: ["#83e0ff", "#45f5ce", "#b158ff"],
      series: [
        {
          type: "graph",
          layout: "force",
          force: {
            repulsion: 1000,
            edgeLength: 50,
          },
          roam: true,
          label: {
            normal: {
              show: true,
            },
          },
          data: [
            {
              name: "自然科学",
    
              symbolSize: 160,
              draggable: true,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: "#04f2a7",
                  borderWidth: 6,
                  shadowBlur: 20,
                  shadowColor: "#04f2a7",
                  color: " #333333",
                },
              },
            },
            {
              name: "农学",
              symbolSize: 110,
              draggable: true,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: '#007bff',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#007bff',
                  color: " #222222 ",
                },
              },
              category: 1,
            },
            {
              name: "医学",
              symbolSize: 110,
              draggable: true,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: "#c0392b",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#c0392b",
                  color: " #222222 ",
                },
              },
              category: 1,
            },
            {
              name: "数学",
              symbolSize: 110,
              draggable: true,
              itemStyle: {
                normal: {
                  borderColor: "#8e44ad",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#8e44ad",
                  color: " #222222 ",
                },
              },
              category: 1,
            },
            {
              name: "物理学",
              symbolSize: 110,
              draggable: true,
              itemStyle: {
                normal: {
                  borderColor: "#f39c12",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#f39c12",
                  color: " #222222 ",
                },
              },
              category: 1,
            },
            {
              name: "天文学",
              symbolSize: 110,
              draggable: true,
              itemStyle: {
                normal: {
                  borderColor: "#16a085",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#16a085",
                  color: " #222222 ",
                },
              },
              category: 1,
            },
            {
              name: "地理学",
              symbolSize: 110,
              draggable: true,
              itemStyle: {
                normal: {
                  borderColor: "#2c3e50",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#2c3e50",
                  color: " #222222 ",
                },
              },
              category: 1,
            },
    
            {
              name: "工具革新",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#04f2a7",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "石器时代",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#8e44ad",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#8e44ad",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "灌溉体系命",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  shadowColor: "#8e44ad",
                  borderColor: "#8e44ad",
                  borderWidth: 4,
                  shadowBlur: 10,
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "农书体系构建",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "铁器革命",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  shadowColor: "#8e44ad",
                  borderColor: "#8e44ad",
                  borderWidth: 4,
                  shadowBlur: 10,
                  color: " #222222 ",
                },
              },
              category: 3,
            },


            {
              name: "技术集成",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  shadowColor: "#2c3e50",
                  borderColor: "#2c3e50",
                  borderWidth: 4,
                  shadowBlur: 10,
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "政策指导",
              symbolSize: 60,
              category: 1,
              draggable: true,
              itemStyle: {
                normal: {
                  shadowColor: "#2c3e50",
                  borderColor: "#2c3e50",
                  
                  borderWidth: 4,
                  shadowBlur: 10,
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "生态智慧",
              draggable: true,
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                 
                  borderColor: "#2c3e50",
           
                  borderWidth: 4,
                  shadowBlur: 10,
                   shadowColor: "#2c3e50",
                   color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "可持续发展",
              draggable: true,
              symbolSize: 80,
              draggable: true,
              
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },

            {
              name: "地力维持",
              draggable: true,
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#FFFF00",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#FFFF00",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "气候适应",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#D3D3D",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#D3D3D",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "灾害应对",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#D3D3D",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#D3D3D",
                  color: " #222222 ",
                },
              },
              category: 3,
              
            },
            {
              name: "理论体系构建",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "治疗技术飞跃",
            
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "预防智慧",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#04f2a7",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "哲学奠基",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#e74c3c",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#e74c3c",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "经典成书",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#e74c3c",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#e74c3c",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "流派争鸣",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#e74c3c",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#e74c3c",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "针灸突破",
        
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#1abc9c",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#1abc9c",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "外科创新",
              
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#1abc9c",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#1abc9c",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "诊断标准化",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#1abc9c",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#1abc9c",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "养生体系",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#3498db",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#3498db",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "防疫机制",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#3498db",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#3498db",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "地理医学",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#3498db",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#3498db",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            
            {
              name: "宇宙理论构建",
              draggable: true,
              symbolSize: 80,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "观测技术",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "天文实践",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#04f2a7",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "哲学模型",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#2d3436",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#2d3436",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "浑天体系突破",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#2d3436",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#2d3436",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "历法体系创新",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#2d3436",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#2d3436",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "仪器迭代",
              symbolSize: 60,
              category: 1,
              draggable: true,
              itemStyle: {
                normal: {
                  borderColor: " #e84393",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: " #e84393",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "数据积累",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#e84393",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#e84393",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "数学方法突破",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#e84393",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#e84393",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "农业历法",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#fdcb6e",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#fdcb6e",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "政治合法性",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#fdcb6e",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#fdcb6e",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "空间认知拓展",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#fdcb6e",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#fdcb6e",
                  color: " #222222 ",
                },
              },
              category: 3,
            },

            {
              name: "认知体系奠定",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "地理认知革命",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "文明支撑系统",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#04f2a7",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "空间模型构建",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: " #8395a7",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: " #8395a7",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "地理环境观",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: " #8395a7",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: " #8395a7",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "制图技术突破",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#ff5252",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#ff5252",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "水文测量",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#ff5252",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#ff5252",
                  color: " #222222 ",
                },
              },
              category: 3,
            },

            {
              name: "农业地理",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#00cec9",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#00cec9",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "城市规划",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#00cec9",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#00cec9",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "水利工程",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#00cec9",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#00cec9",
                  color: " #222222 ",
                },
              },
              category: 3,
            },

            {
              name: "物理认知体系",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#04f2a7",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "技术发明",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#04f2a7",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "物理智慧",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "力学理论",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: " #a29bfe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: " #a29bfe",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "声学实践",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: " #a29bfe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: " #a29bfe",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "机械装置",
              draggable: true,
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#6d4c41",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#6d4c41",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "农业机械革新",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#dfe6e9",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#dfe6e9",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "军事技术",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#dfe6e9",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#dfe6e9",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "数学认知体系",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "计算技术",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#82dffe",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "数学智慧",
              symbolSize: 80,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#82dffe",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#04f2a7",
                  color: " #222222 ",
                },
              },
              category: 2,
            },
            {
              name: "数系与算法体系",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#0000FF",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#0000FF",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "几何理论创新",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#0000FF",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#0000FF",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "计算工具演进",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#FFFFFF",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#FFFFFF",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "符号化与系统化",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#FFFFFF",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#FFFFFF",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "农业与水利工程",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#FFC0CB",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#FFC0CB",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "建筑与军事",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#FFC0CB",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#FFC0CB",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            {
              name: "商业与金融创新",
              symbolSize: 60,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: "#FFC0CB",
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: "#FFC0CB",
                  color: " #222222 ",
                },
              },
              category: 3,
            },
            
            
          ],
          
          links: [
              { source: '自然科学', target: '农学' },
              { source: '自然科学', target: '医学' },
              { source: '自然科学', target: '数学' },
              { source: '自然科学', target: '物理学' },
              { source: '自然科学', target: '天文学' },
              { source: '自然科学', target: '地理学' },

              { source: '农学', target: '工具革新'},
              { source: '农学', target: '农书体系构建'},
              { source: '农学', target: "可持续发展" },
              
              { source: '工具革新', target: '石器时代' },
              { source: '工具革新', target: '铁器革命' },
              { source: '工具革新', target: '灌溉体系命' },
              { source: '农书体系构建', target: '技术集成' },
              { source: '农书体系构建', target: '政策指导' },
              { source: '农书体系构建', target: '生态智慧' },
              { source: '可持续发展', target: '地力维持' },
              { source: '可持续发展', target: '气候适应' },
              { source: '可持续发展', target: '灾害应对' },

              { source: '医学', target: '理论体系构建'},
              { source: '医学', target: '治疗技术飞跃'},
              { source: '医学', target: '预防智慧'},
              
              { source: '理论体系构建', target: '哲学奠基'},
              { source: '理论体系构建', target: '经典成书'},
              { source: '理论体系构建', target: '流派争鸣'},
              { source: '治疗技术飞跃', target: "针灸突破" },
              { source: '治疗技术飞跃', target: "外科创新" },
              { source: '治疗技术飞跃', target: "诊断标准化" },
              { source: '预防智慧', target: '养生体系' },
              { source: '预防智慧', target: '防疫机制' },
              { source: '预防智慧', target: '地理医学' },

              { source: '天文学', target: '宇宙理论构建'},
              { source: '天文学', target: '观测技术'},
              { source: '天文学', target: '天文实践'},
                
              { source: '宇宙理论构建', target: '哲学模型'},
              { source: '宇宙理论构建', target: '浑天体系突破'},
              { source: '宇宙理论构建', target: '历法体系创新'},
              { source: '天文实践', target: '农业历法'},
              { source: '天文实践', target: '政治合法性'},
              { source: '天文实践', target: '空间认知拓展'},
              { source: '观测技术',target: '仪器迭代'},
              { source: '观测技术', target: '数据积累'},
              { source: '观测技术', target: '数学方法突破'},

              { source: '地理学', target: '认知体系奠定'},
              { source: '地理学', target: '地理认知革命'},
              { source: '地理学', target: '文明支撑系统'},
                
              { source: '认知体系奠定', target: '空间模型构建'},
              { source: '认知体系奠定', target: '地理环境观'},
              { source: '地理认知革命', target: '制图技术突破'},
              { source: '地理认知革命', target: '水文测量'},
              { source: '文明支撑系统', target: '农业地理'},
              { source: '文明支撑系统', target: '水利工程'},
              { source: '文明支撑系统', target: '城市规划'}, 

              { source: '物理学', target: '物理认知体系'},
              { source: '物理学', target: '技术发明'},
              { source: '物理学', target: '物理智慧'},
              
              { source: '物理认知体系', target: '力学理论'},
              { source: '物理认知体系', target: '声学实践'},
              { source: '技术发明', target: '机械装置'},
              { source: '物理智慧', target: '农业机械革新'},
              { source: '物理智慧', target: '军事技术'},

              { source: '数学', target: '数学认知体系'},
              { source: '数学', target: '计算技术'},
              { source: '数学', target: '数学智慧'},
              
              { source: '数学认知体系', target: '数系与算法体系'},
              { source: '数学认知体系', target: '几何理论创新'},
              { source: '计算技术', target: '计算工具演进'},
              { source: '计算技术', target: '符号化与系统化'},
              { source: '数学智慧', target: '建筑与军事'},
              { source: '数学智慧', target: '商业与金融创新'},
              { source: '数学智慧', target: '农业与水利工程'},
              
              
          
          ],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 5,
              curveness: 0,
            },
          },
          categories: [{ name: "0" }, { name: "1" }, { name: "2" },{ name: "3" },{ name: "4" },{ name: "5" },{ name: "6" }],
        },
      ],
    };
    

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  const jumpMap={
      '地理学': '../index_01_vice/di.html',
      '农学': '../index_01_vice/nong.html',
      '医学': '../index_01_vice/yi.html',
      '数学': '../index_01_vice/shou.html',
      '物理学': '../index_01_vice/wu.html',
      '天文学': '../index_01_vice/tian.html'
  }
  myChart.on('click', (params) => {
    if (params.dataType === 'node') {
        const nodeName = params.name;
        // 检查是否是需要跳转的节点
        if (jumpMap.hasOwnProperty(nodeName)) {
            window.open(jumpMap[nodeName], '_blank');
            
        }
    }
});
  window.addEventListener("resize", function () {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
  });
})();