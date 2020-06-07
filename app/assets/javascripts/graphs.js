document.addEventListener('turbolinks:load', () => {
  let barLabel = gon.chart_label
  let barData = gon.chart_data
  
  const barChartData = {
        labels: barLabel,
        datasets: [{
            label: '得点',
            data: barData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }

    const barChartOption = {
        title: {
            display: true,
            text: '棒グラフ'
        },
        scales: {
            yAxes: [{
                ticks: {
                    // y軸のメモリを 0 からスタートに強制
                    beginAtZero: true
                }
            }]
        }
    }

    const barChartContext = document.getElementById("bar-chart").getContext('2d')
    new Chart(barChartContext, {
        type: 'bar',
        data: barChartData,
        options: barChartOption
    })


})