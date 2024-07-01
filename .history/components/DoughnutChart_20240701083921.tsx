import { Chart as ChartJsArcElement, Legend, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJs.register(ArcElement, Tooltip, Legend)

const DoughnutChart = () => {
  return (
    <Doughnut data={[]}/>
  )
}

export default DoughnutChart