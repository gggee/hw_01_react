import React from 'react';
import image from "./img/RE.jpg"
import './css/movie_stl.css';

function Info(props) {
    return (
        <div className="app">
            <h1 className='h_movie'>{props.title}</h1>
            <div className="movie">
                <img src={props.poster} alt={`${props.title} Постер`} className='img_movie' />
                <p className='p_movie'><strong>Director:</strong> {props.director}</p>
                <p className='p_movie'><strong>Year of issue:</strong> {props.year}</p>
                <p className='p_movie'><strong>Studio:</strong> {props.studio}</p>
            </div>
        </div>
    );
}

const Movie = () => {
    return (
        <Info
            title="Resident Evil 4: Afterlife"
            director="Paul William Scott Anderson"
            year="September 9, 2010"
            studio="Constantin Film Davis-Films Impact Pictures"
            poster={image}
        />
    );
}

export default Movie;
