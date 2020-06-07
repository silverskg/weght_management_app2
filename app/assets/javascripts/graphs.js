document.addEventListener('turbolinks:load', () => {
  let barLabel = ['1月', '2月', '3月', '4月', '5月', '6月']
  let barData = [5, 4, 2, 6, 5, 8]
  
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