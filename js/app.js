/**********       *****
Trafic Chart-line
 *******          *****/
const lineChart = document.getElementById("lineChart").getContext("2d");
let trafficLineChart = new Chart(lineChart,{
    type: "line",
    data:{
        labels:["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
        datasets:[{
            data:['750','1250','1000','2000','1500','1750','1250','1850','2250','1500','2500'],
            backgroundColor:'rgba( 237, 136, 97, .3)',
            lineTension: 0,
            pointRadius: 8,
            pointBorderWidth: 1,
        }],
    },
    options:{
        legend:{
            display:false,
        }
    },
});



