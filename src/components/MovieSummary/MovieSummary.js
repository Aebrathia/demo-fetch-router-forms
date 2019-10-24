import React from 'react';
import { Link } from "react-router-dom";

function MovieSummary({ title, release_date, vote_average, vote_count }) {
    return (
        <div className="MovieSummary">
            <h2>{title}</h2>
            <p>Released the {release_date}</p>
            <p>{vote_average}/10 out of {vote_count} votes</p>
            <Link to="/movie">View more</Link>
        </div>
    );
}

export default MovieSummary;
