import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      // console.log(movie);
      return <Movie 
        title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi() //
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') // api를 불렀다.
    .then(response => response.json()) // fetch의 결과물이 binary 값이므로 json으로 변환 -> Callback
    .then(json => json.data.movies) // json값의 data의 movies들 값을 읽겠다.
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

}

export default App;
