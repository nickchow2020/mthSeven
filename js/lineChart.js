/**********       *****
Trafic Chart-line
 *******          *****/
const lineChart1 = document.getElementById("lineChartWeekly").getContext("2d");
const lineChart2 = document.getElementById("lineChartMonthly").getContext("2d");
const lineChart3 = document.getElementById("lineChartHourly").getContext("2d");
const lineChart4 = document.getElementById("lineChartDaily").getContext("2d");
let trafficLineChart1 = new Chart(lineChart1,{
    type: "line",
    data:{
        labels:["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
        datasets:[{
            data:['750','1250','1000','2000','1500','1750','1250','1850','2250','1500','2500'],
            backgroundColor:'rgba( 237, 136, 97, .3)',
            lineTension: 0,
            borderWidth:1,
            pointStyle:'circle',
        }],
    },
    options:{
        legend:{
            display:false,
        },
        animation:{
            duration: 0,
        },
    },
});
let trafficLineChart2 = new Chart(lineChart2,{
    type: "line",
    data:{
        labels:["January","February","March","April","May","June","July","August","Steptember","October","November","December"],
        datasets:[{
            data:['2250','3750','3000','6000','4500','5250','3750','5550','6750','4500','7500','6780'],
            backgroundColor:'rgba( 237, 136, 97, .3)',
            lineTension: 0,
            borderWidth:1,
            pointStyle:'circle',
        }],
    },
    options:{
        legend:{
            display:false,
        },
        animation:{
            duration: 0,
        },
    },
});
let trafficLineChart3 = new Chart(lineChart3,{
    type: "line",
    data:{
        labels:["10 a.m","11 a.m","12 p.m","1 p.m","2 p.m","3 p.m","4 p.m","5 p.m","6 p.m","7 p.m","8 p.m","9 p.m"],
        datasets:[{
            data:['7','12','10','20','15','17','12','18','22','15','25','24'],
            backgroundColor:'rgba( 237, 136, 97, .3)',
            lineTension: 0,
            borderWidth:1,
            pointStyle:'circle',
        }],
    },
    options:{
        legend:{
            display:false,
        },
        animation:{
            duration: 0,
        },
    },
});
let trafficLineChart4 = new Chart(lineChart4,{
    type: "line",
    data:{
        labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuaday"],
        datasets:[{
            data:['75','125','100','200','150','170','120'],
            backgroundColor:'rgba( 237, 136, 97, .3)',
            lineTension: 0,
            borderWidth:1,
            pointStyle:'circle',
        }],
    },
    options:{
        legend:{
            display:false,
        },
        animation:{
            duration: 0,
        },
    },
});


