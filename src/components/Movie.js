import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useMoveiFetching } from '../hooks/useMovieFetch';
import ActorsBar from './ActorsBar/ActorsBar';
import BreadCrumps from './BreadCrumps/BreadCrumps';
import Grid from './Grid/Grid';
import MovieInfo from './MovieInfo/MovieInfo';
import { Spinner } from './Spiner/spiner.style';
import noImage from '../images/no_image.jpg'
import Actors from './Actors/Actors';

const Movie = () => {
    const {movieId} = useParams();

    const {state:movie, loading, error} = useMoveiFetching(movieId)
    

    

    if(loading)return<Spinner/>
    if(error) return <h1>Something wrong....</h1>

    return (
      <>
      
    <BreadCrumps movieTitle={movie.original_title} />
    <MovieInfo  movie={movie} />
    <ActorsBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
    <Grid header='Actors'>
    {movie.actors.map(actor => (
            <Actors
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : noImage
              }
                                />

                                
                            ))}
    </Grid>
      </>
    );
};

export default Movie;