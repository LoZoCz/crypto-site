import { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import CryptoListItem from './components/CryptoListItem'
import Button from '../../components/Button'
import useAxios from '../../hooks/useAxios'
import { CryptoDataObject } from '../../utils/types'
import ErrorCell from './components/ErrorCell'

const CryptoList = () => {
    const [page, setPage] = useState(1)

    const { response, error } = useAxios<CryptoDataObject[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=pl'
    )

    const slicedResponse = response?.slice((page - 1) * 50, page * 50)

    return (
        <MainLayout>
            <main className="main-grid crypto__list">
                <h1 className="content-grid crypto__list-title h1">
                    Lista kryptowalut
                </h1>
                <table className="content-grid crypto__list-table list glassyBg">
                    <thead className="list__head">
                        <tr className="list__head-row">
                            <td className="list__head-item h4">Nazwa</td>
                            <td className="list__head-item h4">Cena</td>
                            <td className="list__head-item h4">Ostatnie 24h</td>
                            <td className="list__head-item h4">
                                Kapitalizacja rynkowa
                            </td>
                            <td className="list__head-item h4">
                                Całkowity zasób
                            </td>
                        </tr>
                    </thead>
                    <tbody className="list__body">
                        {slicedResponse &&
                            slicedResponse.map(
                                (data: CryptoDataObject, index: number) => (
                                    <CryptoListItem key={index} data={data} />
                                )
                            )}
                        {error && <ErrorCell err={error} />}
                    </tbody>
                </table>
                <div className="content-grid crypto__list-pagination">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Button
                            key={index}
                            title={index + 1}
                            addClasses={['crypto__list-pagination-btn']}
                            clickFunc={() => setPage(index + 1)}
                        />
                    ))}
                </div>
            </main>
        </MainLayout>
    )
}

export default CryptoList
