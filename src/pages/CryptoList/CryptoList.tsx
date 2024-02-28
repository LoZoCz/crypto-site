import { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import Button from '../../components/Button'
import useAxios from '../../hooks/useAxios'
import { CryptoDataObject } from '../../utils/types'
import ListBodyRender from './components/ListBodyRender'

const CryptoList = () => {
    const [page, setPage] = useState(1)

    const { response, error, loading } = useAxios<CryptoDataObject[]>(
        '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=150&sparkline=false&locale=pl&precision=4'
    )

    const slicedResponse = response?.slice((page - 1) * 30, page * 30)

    return (
        <MainLayout>
            <main className="main-grid crypto__list">
                <h1 className="content-grid crypto__list-title h1">
                    Lista kryptowalut
                </h1>
                <table className="content-grid crypto__list-table list glassyBg">
                    <thead className="list__head">
                        <tr className="list__head-row">
                            <td className="list__head-item h4">Ikona</td>
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
                        <ListBodyRender
                            data={slicedResponse || []}
                            err={error}
                            loading={loading}
                        />
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
