export type ExchangeSortingTemplate = {
    name: string
    year_established: string
    trust_score: string
    trust_score_rank: string
    trade_volume_24h_btc: string
}

export const sortingTemplate: ExchangeSortingTemplate = {
    name: 'default',
    year_established: 'default',
    trust_score: 'default',
    trust_score_rank: 'default',
    trade_volume_24h_btc: 'default',
}

export type exchangeSortingElement =
    | 'name'
    | 'year_established'
    | 'trust_score'
    | 'trust_score_rank'
    | 'trade_volume_24h_btc'
