import React, { useContext } from 'react'
import styled from 'styled-components';
import { MovieContext } from '../contexts/MovieContextProvider';

// const Div = styled.div`
//     width: 100%;
//     height: 200px;
//     background-color: aquamarine;
// `;

export default function MovieList() {
    const { movie } = useContext(MovieContext);
    return (
        <div>{
                movie.map((el) => {
                    return <img src={`${process.env.REACT_APP_BACKEND_STATIC_URL}${el.poster}`} alt={el.title} />
                })
            }          
        </div>
    )
}
