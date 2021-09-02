import React from 'react';
import { useParams } from 'react-router-dom';
import { useMoveiFetching } from '../hooks/useMovieFetch';
import BreadCrumps from './BreadCrumps/BreadCrumps';
import MovieInfo from './MovieInfo/MovieInfo';
import { Spinner } from './Spiner/spiner.style';

const Movie = () => {
    const {movieId} = useParams();

    const {state:movie, loading, error} = useMoveiFetching(movieId)
    

    

    if(loading)return<Spinner/>
    if(error) return <h1>Something wrong....</h1>

    return (
      <>
      
    <BreadCrumps movieTitle={movie.original_title} />
    <MovieInfo  movie={movie} />
      
      </>
    );
};

export default Movie;