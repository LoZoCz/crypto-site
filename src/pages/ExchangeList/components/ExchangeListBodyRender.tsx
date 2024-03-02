import SkeletonRow from '../../../components/loadingElements/SkeletonRow'
import { ExchangeDataObject } from '../../../utils/types'
import ExchangeListItem from '../components/ExhangeListItem'
import ErrorCell from '../../../components/ErrorCell'

type ListBodyRenderProps = {
    data: ExchangeDataObject[] | null
    err: string
    loading: boolean
}

const ListBodyRender = ({ data, err, loading }: ListBodyRenderProps) => {
    return (
        <>
            {data &&
                data.map((data: ExchangeDataObject, index: number) => (
                    <ExchangeListItem key={index} data={data} />
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
