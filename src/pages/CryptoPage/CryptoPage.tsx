import { useParams } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

const CryptoPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    if (!id) {
        navigate('/cryptoList')
    }

    const { response, error, loading } = useAxios<>(`coins/${id}`)

    return (
        <MainLayout>
            <main className="main-grid crypto__page">
                <h1 className="content-grid crypto__page-title">
                    {response?.name}
                </h1>
            </main>
        </MainLayout>
    )
}

export default CryptoPage

//!! TODO zrob typy do danych z api i cala sktrukture strony krypto
