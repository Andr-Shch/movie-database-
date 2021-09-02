import { useCallback, useEffect, useState } from "react"
import API from '../API'

export const useMoveiFetching = movieId =>{
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState(false)
  
    const fetchData = useCallback( async () => {
        try {
            setLoading(true)
            setError(false)

            const movie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId)
            //get director
            const directors = credits.crew.filter(member=> member.job === 'Director')

            setState({
                ...movie,
                actors: credits.cast,
                directors
            })

            setLoading(false)
        } catch (error) {
            setError(true)
        }
    }, [movieId])

    useEffect(()=>{

      fetchData()
    }, [movieId])

    return {state, loading, error};
}