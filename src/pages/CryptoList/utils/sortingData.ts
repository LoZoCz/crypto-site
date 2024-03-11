export type CryptoSortingTemplate = {
    name: string
    current_price: string
    low_24h: string
    total_supply: string
    market_cap: string
}

export const sortingTemplate: CryptoSortingTemplate = {
    name: 'default',
    current_price: 'default',
    low_24h: 'default',
    total_supply: 'default',
    market_cap: 'default',
}

export type cryptoSortingElement =
    | 'name'
    | 'current_price'
    | 'low_24h'
    | 'total_supply'
    | 'market_cap'
