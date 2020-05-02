const doughnutChart = document.getElementById("doughnutChartArea").getContext("2d");

let displaydoughnutChart = new Chart(doughnutChart,{
        type: 'doughnut',
        data: {
            labels: ['Desktop', 'Tablets', 'Phones',],
            datasets: [{
                data: [70,20,10],
                backgroundColor:[
                    'tomato',
                    '#5DEC41',
                    '#4B41EC',
                ] ,
                borderWidth: 1,

            }],
        },
        options: { 
            legend:{
                position: "right", 
                labels:{
                    boxWidth: 20,
                    fontSize: 15,
                    padding:20,
                }
            }
        },
    });