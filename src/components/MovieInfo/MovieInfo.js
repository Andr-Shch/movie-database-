import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../images/no_image.jpg'
import Thumb from '../Thumb/Thumb';
import { Content, Text, Wrapper } from './moveiInfo.styles';



const MovieInfo = ({movie}) => {
   
  
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
               </Text>
            </Content>
        </Wrapper>
    );
};

export default MovieInfo;