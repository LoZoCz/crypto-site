import axios, { AxiosError } from 'axios'
import { useEffect, useState, useCallback } from 'react'

type UseAxiosRes<T> = {
    response: T | null
    loading: boolean
    error: string
}

const useAxios = <T>(url: string): UseAxiosRes<T> => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axios.get<T>(url)
            setResponse(response.data)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const axiosError = err as AxiosError
                setError(axiosError.message)
            } else {
                setError('Wystąpił błąd podczas pobierania danych')
            }
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        response,
        loading,
        error,
    }
}

export default useAxios
