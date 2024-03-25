import { useEffect, useState } from 'react'
import { pricesType } from '../utils/chartTypes'
import getTime from '../utils/getTime'
import { Line } from 'react-chartjs-2'
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
} from 'chart.js'

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale
)

type CryptoChartProps = {
    data: pricesType | undefined
}

type ChartDataTypes = {
    labels: (string | undefined)[]
    datasets: {
        label: string
        data: (number | undefined)[]
        borderColor: string
        backgroundColor: string
        pointRadius: string
    }[]
}
const CryptoChart = ({ data }: CryptoChartProps) => {
    const [chartData, setChartData] = useState<ChartDataTypes>({
        labels: [],
        datasets: [
            {
                label: 'test',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: '0',
            },
        ],
    })

    useEffect(() => {
        if (data) {
            const newLabels = data
                .map((el: Array<number>) => getTime(el[0]))
                .filter(Boolean)
            const newPrices = data.map((el: Array<number>) => el[1])
            setChartData((prevState) => ({
                ...prevState,
                labels: newLabels,
                datasets: [
                    {
                        ...prevState.datasets[0],
                        data: newPrices,
                    },
                ],
            }))
        }
    }, [data])

    useEffect(() => {
        console.log(chartData)
    }, [chartData])

    return <Line data={chartData} />
}

export default CryptoChart
