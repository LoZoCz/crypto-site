export type CryptoChartTypes = {
    data: chartData[] | undefined
}

export type chartData = {
    prices: pricesType
    market_caps: number[][]
    total_volumes: number[][]
}

export type pricesType = Array<[number, number]>
