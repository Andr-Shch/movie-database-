import React, { useEffect, useState } from 'react';
import { BACKDROP_SIZE, POSTER_SIZE,  IMAGE_BASE_URL} from '../config'
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg'
import Grid from './Grid/Grid';
import HeroImg from './HeroImage/HeroImg';
import Thumb from './Thumb/Thumb';



const Home = () => {

 const {state, loading, error} = useHomeFetch()

  console.log(state);
    return  <>
             {state.results[0] 
              ? <HeroImg 
                 image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                 title={state.results[0].original_title}
                 text={state.results[0].overview}/>
              : null
             }
            <Grid header='Popular Movies'> 
               {state.results.map(movie=> (
                  <Thumb
                  key={movie.id}
                  clickable={true}
                  image={
                      movie.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                      : NoImage
                  }
                  movieId={movie.id}
                  />
               ))}
            </Grid>
        </>
    
};

export default Home;