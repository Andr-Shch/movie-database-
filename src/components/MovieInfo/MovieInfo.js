import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../images/no_image.jpg'
import Thumb from '../Thumb/Thumb';
import { Content, Text, Wrapper } from './moveiInfo.styles';



const MovieInfo = ({movie}) => {
   

    console.log(movie);
  
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
              <Thumb 
               image={movie.poster_path?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:noImage}
               clickable={false}
               />
               <Text>
                   <h1>{movie.title}</h1>
                   <h3>Plot</h3>
                   <p>{movie.overview}</p>

                    <div className='rating-directors-cast'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
                        <div className='director'>
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                        <div className='cast'>
                            <h3>Actors</h3>
                            {movie.actors.slice(0,10).map(actor => (
                                <span key={actor.credit_id}>{actor.name}, </span>
                            ))}
                        </div>
                    </div>
               </Text>
            </Content>
        </Wrapper>
    );
};

export default MovieInfo;