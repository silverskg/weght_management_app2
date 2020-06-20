document.addEventListener('turbolinks:load', () => {
  const convertDate = (date) => new Date(new Date(date).setHours(0,0,0,0))

  const TODAY = convertDate(new Date())
  const A_WEEK_AGO = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() -6)
  const TWO_WEEK_AGO = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() -13)
  const A_MONTH_AGO = new Date(TODAY.getFullYear(), TODAY.getMonth() - 1, TODAY.getDate() + 1)
  const THREE_MONTHS_AGO = new Date (TODAY.getFullYear(), TODAY.getMonth() - 3, TODAY.getDate()  + 1)

  const drawGraphForPeriod = () => {
    let from = convertDate(document.getElementById('start-calendar').value)
    let to = convertDate(document.getElementById('end-calendar').value)

    if (from > to) {
      alert('終了日は開始日以降の日付に設定して下さい')
    }else {
      drawGraph(from, to)
    }
  }

     // 日付の古い方・新しい方を取得する関数
  const minDate = (date1, date2) => (date1 < date2) ? date1 : date2
  const maxDate = (date1, date2) => (date1 > date2) ? date1 : date2

   // データの初日・最終日
  const START_DATE = convertDate(gon.weight_records[0].date)
  const END_DATE = convertDate(gon.weight_records[gon.weight_records.length - 1 ].date)

  flatpickr.localize(flatpickr.l10ns.ja)

  const periodCalendarOption = {
    disableMobile: true,
    minDate: START_DATE,
    maxDate: END_DATE,
    onChange: drawGraphForPeriod
  }

  //新規登録用カレンダー
  const startCalendarFlatpickr = flatpickr('#start-calendar', periodCalendarOption)
  const endCalendarFlatpickr = flatpickr('#end-calendar', periodCalendarOption)

  flatpickr('#new-calendar', {
    disableMobile: true,
    disable: gon.recorded_dates,
    defultDate: 'today',
  })

  //編集用カレンダー
  const editCalendar = document.getElementById('edit-calendar')
  const editWeight = document.getElementById('edit-weight')
  const inputWeight = () => {
    let record = gon.weight_records.find((record) => record.date === editCalendar.value)
    editWeight.value = record.weight
  }

  flatpickr('#edit-calendar', {
    disableMobile: true,
    enable: gon.recorded_dates,
    noCalendar: gon.recorded_dates.length === 0,
    onChange: inputWeight
  })

  const chartWeightContext = document.getElementById("chart-weight").getContext('2d')

  let chartWeight

  const drawGraph = ( from, to) => {

    let records = gon.weight_records.filter((record) => {
      let date = convertDate(record.date)
      return from <= date && date <= to
    })

    let dates = records.map((record) => {
      return record.date.replace(/^\d+-0*(\d+)-0*(\d+)$/, '$1/$2')
    })

    let weights = records.map((record) => record.weight)

    let weightDate = {
      labels: dates,
      datasets: [{
        label: '体重(kg)',
        data: weights,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        spanGaps: true
      }]
    }

    let weightOption = {
      tooltips: {
        callbacks: {
          title: function ( tooltipItems) {
            return tooltipItems[0].xLabel.replace(/^(\d+).(\d+)$/, ' $1 月 $2 日')
          },
          label: function (tooltipItem) {
            return '体重:' + tooltipItem.yLabel + 'kg'
          }
        }
      }
    }

    if (!chartWeight) {
      chartWeight = new Chart(chartWeightContext, {
        type: 'line',
        data: weightDate,
        options: weightOption
      })
    }else {
      chartWeight.data = weightDate
      chartWeight.options = weightOption
      chartWeight.update()
    }
  }

  const drawGraphToToday = (from) => {
    from = maxDate(from, START_DATE)
    let to = minDate(TODAY, END_DATE)
    drawGraph(from, to)
    startCalendarFlatpickr.setDate(from)
    endCalendarFlatpickr.setDate(to)
  }

  document.getElementById('a-week-button').addEventListener('click', () =>{
    drawGraphToToday(A_WEEK_AGO)
  })

  document.getElementById('two-weeks-button').addEventListener('click',() => {
    drawGraphToToday(TWO_WEEK_AGO)
  })

  document.getElementById('a-month-button').addEventListener('click', () => {
    drawGraphToToday(A_MONTH_AGO)
  })

  document.getElementById('three-months-button').addEventListener('click', () => {
    drawGraphToToday(THREE_MONTHS_AGO)
  })

  drawGraph(A_WEEK_AGO, TODAY)
})