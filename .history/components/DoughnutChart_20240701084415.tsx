'use client'

import { Chart as ChartJs, ArcElement, Legend, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJs.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data
      }
    ]
  }
  return (
    <Doughnut data={[]}/>
  )
}

export default DoughnutChart