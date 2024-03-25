import { ExchangeDataObject } from '../../../utils/types'

type ExchangeListItemProps = {
    key: number
    data: ExchangeDataObject | null
}

const ExchangeListItem = ({ data, ...props }: ExchangeListItemProps) => {
    return (
        <tr {...props} className="list__body-row">
            <td data-cell="ikona" className="list__row-item">
                <img
                    src={data?.image}
                    alt={`${data?.name} img`}
                    className="list__row-icon"
                />
            </td>

            <td data-cell="nazwa" className="list__row-item">
                {data?.name}
            </td>

            <td
                data-cell="rok założenia"
                className="list__row-item table__item-icon p"
            >
                {data?.year_established ? data?.year_established : '-----'}
            </td>
            <td data-cell="trust score" className="list__row-item p">
                {data?.trust_score}
            </td>
            <td data-cell="ranking trust score" className="list__row-item p">
                {data?.trust_score_rank}
            </td>
            <td data-cell="zasób bitcoina" className="list__row-item p">
                €{data?.trade_volume_24h_btc.toFixed(4)}
            </td>
        </tr>
    )
}

export default ExchangeListItem
