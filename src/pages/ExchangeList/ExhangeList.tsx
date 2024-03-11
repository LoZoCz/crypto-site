import { useMemo, useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import useAxios from '../../hooks/useAxios'
import { ExchangeDataObject } from '../../utils/types'
import Button from '../../components/Button'
import ExchangeListBodyRender from './components/ExchangeListBodyRender'
import SortingArrows from '../../components/SortingArrows'
import {
    ExchangeSortingTemplate,
    exchangeSortingElement,
    sortingTemplate,
} from './utils/sortingData'
import { orderBy } from 'lodash'

const ExhangeList = () => {
    const [page, setPage] = useState(1)
    const [sorted, setSorted] = useState(sortingTemplate)

    const { response, error, loading } = useAxios<ExchangeDataObject[]>(
        '/exchanges?per_page=100'
    )

    const slicedResponse = response?.slice((page - 1) * 20, page * 20)

    const sortedResponse = useMemo(() => {
        const defaultSort =
            !slicedResponse ||
            Object.values(sorted).every((value) => value === 'default')

        if (defaultSort) {
            return slicedResponse || []
        }

        const key = (
            Object.keys(sorted) as Array<keyof ExchangeSortingTemplate>
        ).find((k) => sorted[k] !== 'default')

        if (!key) return slicedResponse

        const order = sorted[key] === 'asc' ? 'asc' : 'desc'

        return orderBy(slicedResponse, [key], [order])
    }, [slicedResponse, sorted])

    const handleSort = (sortEle: exchangeSortingElement) => {
        setSorted((prev) => {
            if (prev[sortEle] === 'asc') {
                return {
                    ...sortingTemplate,
                    [sortEle]: 'desc',
                }
            } else if (prev[sortEle] === 'desc') {
                return {
                    ...sortingTemplate,
                    [sortEle]: 'default',
                }
            } else {
                return {
                    ...sortingTemplate,
                    [sortEle]: 'asc',
                }
            }
        })
    }

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
                            <td className="list__head-item h4">
                                {' '}
                                <button
                                    onClick={() => handleSort('name')}
                                    className="list__head-sortBtn"
                                >
                                    Nazwa <SortingArrows sorted={sorted.name} />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() =>
                                        handleSort('year_established')
                                    }
                                    className="list__head-sortBtn"
                                >
                                    Rok zalożenia{' '}
                                    <SortingArrows
                                        sorted={sorted.year_established}
                                    />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() => handleSort('trust_score')}
                                    className="list__head-sortBtn"
                                >
                                    Trust score{' '}
                                    <SortingArrows
                                        sorted={sorted.trust_score}
                                    />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() =>
                                        handleSort('trust_score_rank')
                                    }
                                    className="list__head-sortBtn"
                                >
                                    Ranking Trust score{' '}
                                    <SortingArrows
                                        sorted={sorted.trust_score_rank}
                                    />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() =>
                                        handleSort('trade_volume_24h_btc')
                                    }
                                    className="list__head-sortBtn"
                                >
                                    Zasób bitcoina{' '}
                                    <SortingArrows
                                        sorted={sorted.trade_volume_24h_btc}
                                    />
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="list__body">
                        <ExchangeListBodyRender
                            data={sortedResponse || []}
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
