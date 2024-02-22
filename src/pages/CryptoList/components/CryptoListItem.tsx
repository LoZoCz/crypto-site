import ArrowUp from './ArrowUp'

type CryptoListItemProps = {
    key: number
}

const CryptoListItem = ({ ...props }: CryptoListItemProps) => {
    return (
        <tr
            {...props}
            onClick={() => console.log('clicked')}
            className="crypto__list-main-item main__table-body"
        >
            <td data-cell="nazwa" className="main__table-item">
                Kryptowaluta
            </td>

            <td
                data-cell="cena"
                className="main__table-item table__item-icon p"
            >
                <ArrowUp />
                $40000.00
            </td>
            <td data-cell="1h %" className="main__table-item p">
                0.27%
            </td>
            <td
                data-cell="kapitalizacja rynkowa"
                className="main__table-item p"
            >
                $983547738543.00
            </td>
            <td data-cell="ostatnie 7 dni" className="main__table-item p">
                GRAPH
            </td>
        </tr>
    )
}

export default CryptoListItem
