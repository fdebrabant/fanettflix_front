import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import PlayerMovie from '../Views/PlayerMovie';

const PosterMovie = styled.img`
    width: 200px;
    margin: 10px;
    filter: grayscale(70%);

    :hover {
    transition: all 1s ease-out;
    filter: grayscale(0);
} 
`;

export default function Poster({ img, title, movie, id }) {
    const history = useHistory();
    function handleClick() {
        history.push("/movie/" + id);
    }

    return (
            <PosterMovie
                src={img}
                alt={title}
                onClick={handleClick}
            />
    )
}
