import React from 'react';

export default function MovieDetails({title, year, synopsis, director}) {
    return (
        <div>
            <div>{title}</div>
            <div>{year}</div>
            <div>{director}</div>
            <div>{synopsis}</div>
        </div>
    )
}
