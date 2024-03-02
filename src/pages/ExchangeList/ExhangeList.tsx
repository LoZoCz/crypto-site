import { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import useAxios from '../../hooks/useAxios'
import { ExchangeDataObject } from '../../utils/types'
import Button from '../../components/Button'
import ExchangeListBodyRender from './components/ExchangeListBodyRender'

const ExhangeList = () => {
    const [page, setPage] = useState(1)

    const { response, error, loading } = useAxios<ExchangeDataObject[]>(
        '/exchanges?per_page=150'
    )

    const slicedResponse = response?.slice((page - 1) * 30, page * 30)

    return (
        <MainLayout>
            <main className="main-grid exchange__list">
                <h1 className="content-grid exchange__list-title h1">
                    Lista giełd
                </h1>
                <table className="content-grid exchange__list-table list glassyBg">
                    <thead className="list__head">
                        <tr className="list__head-row">
                            <td className="list__head-item h4">Ikona</td>
                            <td className="list__head-item h4">Nazwa</td>
                            <td className="list__head-item h4">
                                Rok zalożenia
                            </td>
                            <td className="list__head-item h4">Trust score</td>
                            <td className="list__head-item h4">
                                Ranking Trust score
                            </td>
                            <td className="list__head-item h4">
                                Zasób bitcoina
                            </td>
                        </tr>
                    </thead>
                    <tbody className="list__body">
                        <ExchangeListBodyRender
                            data={slicedResponse || []}
                            err={error}
                            loading={loading}
                        />
                    </tbody>
                </table>
                <div className="content-grid exchange__list-pagination">
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

export default ExhangeList

//TODO!! zrob cala liste z danymi z api tak jak z krypto
