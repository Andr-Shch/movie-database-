import { PropTypes } from 'prop-types';
import React from 'react';
import { Image, Wrapper } from './actor.styles';

const Actors = ({name, character, imageUrl}) => {
    return (
      <Wrapper>
          <Image src={imageUrl} alt='actor photo' />
          <h3>{name}</h3>
          <p>{character}</p>
      </Wrapper>
    );
};
 
Actors.propType = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string
}
export default Actors;