import React from 'react';
import './MoviePage.css';
import { Link } from "react-router-dom";

function MoviePage({ id, title, poster_path, overview }) {
    return (
        <div className="MoviePage">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <h2>{title}</h2>
            <p>{overview}</p>
            <Link to="/">Back to home page</Link>
        </div>
    );
}

export default MoviePage;
