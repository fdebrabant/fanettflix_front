import React, { useContext } from 'react';
import MatuiCarousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';
import { MoviesContext } from '../contexts/MoviesContextProvider';

function Item({ item }) {
    const imgUrl = "http://localhost:8080/" + item.fullscreen;
    return (
        <Paper key={ item.id }>
            <img className="coco" src={ imgUrl } alt={ item.title }/>
        </Paper>
    )
}

function Carousel({ movieList }) {
    const { movies } = useContext(MoviesContext);
    return (
        <MatuiCarousel>
            {
                movies.map( (item, i) => <Item key={i} item={item} /> )
            }
        </MatuiCarousel>
    )
}
export default Carousel;
