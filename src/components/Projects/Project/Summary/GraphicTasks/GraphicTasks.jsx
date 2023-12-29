import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useGraphic } from '../../../../../hooks/useGraphic'

ChartJS.register(ArcElement, Tooltip, Legend)

export const GraphicTasks = ({ tasks }) => {
  const { data } = useGraphic(tasks)
  return (
    <div>
      <h2>Graphic Data</h2>
      <div className='d-flex justify-content-center mt-5' style={{ height: '300px' }}>
        <Doughnut data={data} />
      </div>
    </div>
  )
}
