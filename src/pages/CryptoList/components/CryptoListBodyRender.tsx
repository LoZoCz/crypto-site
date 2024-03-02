import SkeletonRow from '../../../components/loadingElements/SkeletonRow'
import { CryptoDataObject } from '../../../utils/types'
import CryptoListItem from './CryptoListItem'
import ErrorCell from '../../../components/ErrorCell'

type ListBodyRenderProps = {
    data: CryptoDataObject[] | null
    err: string
    loading: boolean
}

const ListBodyRender = ({ data, err, loading }: ListBodyRenderProps) => {
    return (
        <>
            {data &&
                data.map((data: CryptoDataObject, index: number) => (
                    <CryptoListItem key={index} data={data} />
                ))}
            {err && <ErrorCell err={err} />}
            {loading &&
                Array.from({ length: 30 }).map((_, index) => (
                    <SkeletonRow key={index} />
                ))}
        </>
    )
}

export default ListBodyRender
