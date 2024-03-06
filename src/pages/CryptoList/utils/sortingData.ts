export type SortingTemplate = {
    name: string
    current_price: string
    low_24h: string
    total_supply: string
    market_cap: string
}

export const sortingTemplate: SortingTemplate = {
    name: 'default',
    current_price: 'default',
    low_24h: 'default',
    total_supply: 'default',
    market_cap: 'default',
}

export type sortingElement =
    | 'name'
    | 'current_price'
    | 'low_24h'
    | 'total_supply'
    | 'market_cap'
