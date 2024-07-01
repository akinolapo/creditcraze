import { ArcElement } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJs.register(ArcElement)

const DoughnutChart = () => {
  return (
    <Doughnut data={[]}/>
  )
}

export default DoughnutChart