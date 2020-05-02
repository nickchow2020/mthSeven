const barChart = document.getElementById("charBarArea").getContext("2d");

let displayBarChart = new Chart(barChart,{
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Thu', 'Wed', 'Thur', 'Fri', 'Sat'],
            datasets: [{
                data: [50, 19, 30, 110, 130, 93, 76],
                backgroundColor: 'tomato',
                borderWidth: 1,
                barPercentage: 0.6,
            }],
        },
        options: {
            legend:{
                display: false,
            },
            scales:{
                yAxes:[{
                    thicks: {
                        beginAtZone: true,
                    }
                }]
            }
        },
    });