import MainLayout from '../../layouts/MainLayout'
import CryptoListItem from './components/CryptoListItem'

const CryptoList = () => {
    return (
        <MainLayout>
            <main className="main-grid crypto__list">
                <h1 className="content-grid crypto__list-title h1">
                    Lista kryptowalut
                </h1>
                <table className="content-grid crypto__list-table main__table glassyBg">
                    <thead className="main__table-head">
                        <tr className="main__table-head-row">
                            <td className="main__table-head-item h4">Nazwa</td>
                            <td className="main__table-head-item h4">Cena</td>
                            <td className="main__table-head-item h4">1h %</td>
                            <td className="main__table-head-item h4">
                                Kapitalizacja rynkowa
                            </td>
                            <td className="main__table-head-item h4">
                                Ostatnie 7 dni
                            </td>
                        </tr>
                    </thead>
                    <tbody className="list__body">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <CryptoListItem key={index} />
                        ))}
                    </tbody>
                </table>
            </main>
        </MainLayout>
    )
}

export default CryptoList
