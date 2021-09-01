import React, { useEffect, useState } from 'react';


import { BACKDROP_SIZE, POSTER_SIZE,  IMAGE_BASE_URL} from '../config'
import { useHomeFetch } from '../hooks/useHomeFetch';


import NoImage from '../images/no_image.jpg'



const Home = () => {

 const {state, loading, error} = useHomeFetch()

  console.log(state);
    return (
        <div>
            HOmed
        </div>
    );
};

export default Home;