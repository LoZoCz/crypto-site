import { useParams } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'
import { CryptoObjectTypes } from './utils/cryptoObjectTypes'
import CryptoDescription from './components/CryptoDescription'
import LinksRender from './components/LinksRender'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { pricesType } from './utils/chartTypes'
import CryptoChart from './components/CryptoChart'

const CryptoPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [timeSpan, setTimeSpan] = useState(1)
    const [chartRes, setChartRes] = useState<pricesType | undefined>(undefined)

    if (!id) {
        navigate('/cryptoList')
    }

    const { response, error, loading } = useAxios<CryptoObjectTypes>(
        `coins/${id}`
    )

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${timeSpan}`
            )
            .then((res) => {
                setChartRes(res.data.prices)
            })
            .catch((err) => console.log(err))
    }, [timeSpan, id])

    if (error) {
        console.log(error)
    }

    return (
        <MainLayout>
            <main className="main-grid crypto__page">
                <section className="content-grid crypto__page-body">
                    <div className="crypto__page-info glassyBg">
                        <div className="crypto__page-titleContainer">
                            <img
                                src={response?.image?.small}
                                alt={`${response?.name} icon`}
                            />
                            <h1 className="crypto__page-title h1">
                                Info - {response?.name}
                            </h1>
                        </div>
                        <div className="crypto__page-infoContainer">
                            <h2 className="crypto__page-infoTitle">
                                Informacje finansowe
                            </h2>
                            <div className="crypto__page-infoBox">
                                <div className="crypto__page-item">
                                    <strong className="crypto__page-itemTitle">
                                        Wartość
                                    </strong>
                                    <p className="crypto__page-itemValue">
                                        €
                                        {
                                            response?.market_data?.current_price
                                                ?.eur
                                        }
                                    </p>
                                </div>
                                <div className="crypto__page-item">
                                    <strong className="crypto__page-itemTitle">
                                        Zasób kryptowaluty
                                    </strong>
                                    <p className="crypto__page-itemValue">
                                        {response?.market_data?.ath?.eur}
                                    </p>
                                </div>
                                <div className="crypto__page-item">
                                    <strong className="crypto__page-itemTitle">
                                        Wolumen w ostatnich 24h
                                    </strong>
                                    <p className="crypto__page-itemValue">
                                        {
                                            response?.market_data?.total_volume
                                                ?.eur
                                        }
                                    </p>
                                </div>
                                <div className="crypto__page-item">
                                    <strong className="crypto__page-itemTitle">
                                        Zmiana wartosci w ostatnich 24h
                                    </strong>
                                    <p className="crypto__page-itemValue">
                                        {
                                            response?.market_data
                                                ?.ath_change_percentage?.eur
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="crypto__page-descBox">
                            <h3 className="crypto__page-descTitle">Opis</h3>
                            <CryptoDescription
                                text={response?.description?.en}
                                loading={loading}
                            />
                        </div>
                        <div className="crypto__page-socials">
                            <LinksRender res={response || undefined} />
                        </div>
                    </div>
                    <div className="crypto__page-chart glassyBg">
                        <h2 className="crypto__page-chartTitle h2">
                            Wykres kryptowaluty
                        </h2>
                        <div className="crypto__page-timeSpanBox">
                            <button
                                className={
                                    timeSpan === 1 ? 'active-btn' : 'button'
                                }
                                disabled={timeSpan === 1}
                                onClick={() => setTimeSpan(1)}
                            >
                                1 dzień
                            </button>
                            <button
                                className={
                                    timeSpan === 7 ? 'active-btn' : 'button'
                                }
                                disabled={timeSpan === 7}
                                onClick={() => setTimeSpan(7)}
                            >
                                7 dni
                            </button>
                            <button
                                className={
                                    timeSpan === 14 ? 'active-btn' : 'button'
                                }
                                disabled={timeSpan === 14}
                                onClick={() => setTimeSpan(14)}
                            >
                                14 dni
                            </button>
                            <button
                                className={
                                    timeSpan === 30 ? 'active-btn' : 'button'
                                }
                                disabled={timeSpan === 30}
                                onClick={() => setTimeSpan(30)}
                            >
                                30 dni
                            </button>
                        </div>
                        <div className="crypto__page-chartContainer">
                            <CryptoChart data={chartRes} />
                        </div>
                        <div className="crypto__page-priceChange">
                            <div>
                                <h3 className="h3 crypto__page-priceChangeTitle">
                                    Najwyzsza wartosc w ostatnich 24h
                                </h3>
                                <p className="h3 crypto__page-priceChangeValue">
                                    €{response?.market_data?.high_24h?.eur}
                                </p>
                            </div>
                            <div>
                                <h3 className="h3 crypto__page-priceChangeTitle">
                                    Najnizsza wartosc w ostatnich 24h
                                </h3>
                                <p className="h3 crypto__page-priceChangeValue">
                                    €{response?.market_data?.low_24h?.eur}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default CryptoPage
