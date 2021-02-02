import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
          .then(res => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error('something went wrong!')
            }
          })
          .then(response => {
            setData(response.data.results)
            setLoading(false)
          })
          .catch(error => {
            setError(error)
          })
    }, [url])

    return {
        data, setData,
        loading, setLoading,
        error, setError
    }
}
