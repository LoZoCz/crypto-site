import { useParams } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'
import { CryptoObjectTypes } from './utils/cryptoObjectTypes'
import CryptoDescription from './components/CryptoDescription'

const CryptoPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    if (!id) {
        navigate('/cryptoList')
    }

    const { response, error, loading } = useAxios<CryptoObjectTypes>(
        `coins/${id}`
    )

    if (error) {
        console.log(error)
    }

    return (
        <MainLayout>
            <main className="main-grid crypto__page">
                <section className="content-grid crypto__page-body">
                    <div className="crypto__page-info glassyBg">
                        <h1 className="crypto__page-title h1">
                            Info - {response?.name}
                        </h1>
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
                            <a href=""></a>
                        </div>
                    </div>
                    <div className="crypto__page-chart glassyBg">
                        <h2 className="crypto__page-title">
                            Wykres kryptowaluty
                        </h2>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default CryptoPage

//!! TODO zrob przyciski z socialami oraz wykres
//!! TODO wystylizuj cala strone
//!! TODO zmien spowrotem dane z mockData na api w liscie kryptowalut
