import React, { useContext } from 'react';
import styled from 'styled-components';
import { MoviesContext } from '../contexts/MoviesContextProvider';
import Poster from '../component/Poster';

const PostersList = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`;

export default function MovieList() {
    const { movies } = useContext(MoviesContext);
    return (
        <PostersList>
            {
                movies.map((el) => {
                    return <Poster 
                    img={`${process.env.REACT_APP_BACKEND_STATIC_URL}${el.poster}`} 
                    alt={el.title} 
                    key={el.id}
                    id={el.id}
                    movie={el}
                    />
                })
            }          
        </PostersList>
    )
}
