import { useMemo, useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import Button from '../../components/Button'
import useAxios from '../../hooks/useAxios'
import { CryptoDataObject } from '../../utils/types'
import CryptoListBodyRender from './components/CryptoListBodyRender'
import SortingArrows from './components/SortingArrows'
import {
    sortingTemplate,
    sortingElement,
    SortingTemplate,
} from './utils/sortingData'
import { orderBy } from 'lodash'

const CryptoList = () => {
    const [page, setPage] = useState(1)
    const [sorted, setSorted] = useState(sortingTemplate)

    const { response, error, loading } = useAxios<CryptoDataObject[]>(
        '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&sparkline=false&locale=pl&precision=6'
    )

    const slicedResponse = response?.slice((page - 1) * 20, page * 20)

    const sortedResponse = useMemo(() => {
        const defaultSort =
            !slicedResponse ||
            Object.values(sorted).every((value) => value === 'default')

        if (defaultSort) {
            return slicedResponse || []
        }

        const key = (Object.keys(sorted) as Array<keyof SortingTemplate>).find(
            (k) => sorted[k] !== 'default'
        )

        if (!key) return slicedResponse

        const order = sorted[key] === 'asc' ? 'asc' : 'desc'

        return orderBy(slicedResponse, [key], [order])
    }, [slicedResponse, sorted])

    const handleSort = (sortEle: sortingElement) => {
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

    // !! TODO - zrob z tego hooka abym mogl z niego korzystac w calej aplikacji
    // !! TODO - ogolnie usprawnij sortowanie danych bo nie jest ono najlepsze

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
                            <td className="list__head-item h4">
                                <button
                                    onClick={() => handleSort('name')}
                                    className="list__head-sortBtn"
                                >
                                    Nazwa <SortingArrows sorted={sorted.name} />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() => handleSort('current_price')}
                                    className="list__head-sortBtn"
                                >
                                    Cena{' '}
                                    <SortingArrows
                                        sorted={sorted.current_price}
                                    />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() => handleSort('low_24h')}
                                    className="list__head-sortBtn"
                                >
                                    Ostatnie 24h{' '}
                                    <SortingArrows sorted={sorted.low_24h} />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() => handleSort('total_supply')}
                                    className="list__head-sortBtn"
                                >
                                    Kapitalizacja rynkowa{' '}
                                    <SortingArrows
                                        sorted={sorted.total_supply}
                                    />
                                </button>
                            </td>
                            <td className="list__head-item h4">
                                <button
                                    onClick={() => handleSort('market_cap')}
                                    className="list__head-sortBtn"
                                >
                                    Całkowity zasób{' '}
                                    <SortingArrows sorted={sorted.market_cap} />
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="list__body">
                        <CryptoListBodyRender
                            data={sortedResponse || []}
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
