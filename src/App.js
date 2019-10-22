import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7f077937236d1ffe1a9deeb64a9d2a38');
    this.setState({ movies: response.data.results });    
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map(movie => (
          <div key={movie.id} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
