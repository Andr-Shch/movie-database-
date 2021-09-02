import React from 'react';
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config'
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg'
import Button from './Button/Button';
import Grid from './Grid/Grid';
import HeroImg from './HeroImage/HeroImg';
import SeachBar from './SearchBar/SeachBar';
import { Spinner } from './Spiner/spiner.style';
import Thumb from './Thumb/Thumb';



const Home = () => {

    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsloadingMore
    } = useHomeFetch()

    console.log(state);
    if(error) return <h1>OOpss...someting go wrong</h1>
    return <>
        {!searchTerm && state.results[0]
            ? <HeroImg
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview} />
            : null
        }

        <SeachBar setSearchTerm={setSearchTerm} />

        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
            {state.results.map(movie => (
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
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (
            <Button text='Load More' callback={()=>setIsloadingMore(true)} />
        )}
    </>

};

export default Home;