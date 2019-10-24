import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
} from "react-router-dom";
// import MoviePage from './components/MoviePage/MoviePage';
import MovieSummary from './components/MovieSummary/MovieSummary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
    }
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  async getPopularMovies(page = this.state.page) {
    const response = await axios.get(`https://api.themoviedb.org/4/discover/movie?api_key=7f077937236d1ffe1a9deeb64a9d2a38&page=${page}`);
    this.setState({ movies: response.data.results, page });   
  }

  changePage = (event) => {
    event.preventDefault();
    this.getPopularMovies(this.state.page);
  }

  handleChange = (event) => {
    this.setState({ page: event.target.value })
  }

  render() {
    const { page, movies } = this.state;
    return (
      <div className="App">
        <Router>
          <form onSubmit={this.changePage}>
            <label htmlFor="page">Page</label>
            <input type="text" id="page" name="page" value={page} onChange={this.handleChange} />
            <button type="submit">Go</button>
          </form>
          {movies.map(movie => <MovieSummary key={movie.id} {...movie} />)}
        </Router>
      </div>
    );
  }
}

export default App;
