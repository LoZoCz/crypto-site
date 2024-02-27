import { CryptoDataObject } from '../../../utils/types'

type CryptoListItemProps = {
    key: number
    data: CryptoDataObject | null
}

const CryptoListItem = ({ data, ...props }: CryptoListItemProps) => {
    return (
        <tr
            {...props}
            onClick={() => console.log('clicked')}
            className="list__body-row"
        >
            <td data-cell="nazwa" className="list__row-item">
                {data?.name}
            </td>

            <td data-cell="cena" className="list__row-item table__item-icon p">
                ${data?.current_price}
            </td>
            <td data-cell="ostatnie 24h" className="list__row-item p">
                {data?.low_24h}
            </td>
            <td data-cell="kapitalizacja rynkowa" className="list__row-item p">
                ${data?.market_cap}
            </td>
            <td data-cell="całkowity zasób" className="list__row-item p">
                {data?.total_supply ? data?.total_supply : '-----'}
            </td>
        </tr>
    )
}

export default CryptoListItem
