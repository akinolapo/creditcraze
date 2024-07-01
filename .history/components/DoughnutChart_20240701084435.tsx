'use client'

import { Chart as ChartJs, ArcElement, Legend, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJs.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3750]
      }
    ]
  }
  return (
    <Doughnut data={[]}/>
  )
}

export default DoughnutChart