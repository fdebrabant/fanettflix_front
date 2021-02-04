import React from 'react';
import styled from 'styled-components';

const MovieHeader = styled.div`
   display:flex;
   align-items: baseline;
   margin: 20px 0;
`;

const MovieTitle = styled.div`
    font-size: 30px;
`;

const MovieYear = styled.div`
    margin-left:10px;
`;

const MovieDirector = styled.div`
    font-size: 30px;
`;

const Synopsis = styled.div`
    font-size: 20px;
    margin: 20px 0;
`;

export default function MovieDetails({title, year, synopsis, director}) {
    return (
        <div>
            <MovieHeader>
                <MovieTitle>{title}</MovieTitle>
                <MovieYear>- {year}</MovieYear>
            </MovieHeader>
            <MovieDirector>{director}</MovieDirector>
            <Synopsis>{synopsis}</Synopsis>
        </div>
    )
}
