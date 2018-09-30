import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {
    greeting: 'Hello!',
    movies: [
      {
        title: "Hunger",
        poster: "https://images-na.ssl-images-amazon.com/images/I/61Mo1-oLQxL._SY445_.jpg"
      },
    
      {
        title: "Game",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Hunger_Games_cover.jpg/220px-The_Hunger_Games_cover.jpg"
      },
    
      {
        title: "Moking",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg"
      },
    
      {
        title: "Jay",
        poster: "https://steamcdn-a.akamaihd.net/steam/apps/416560/header.jpg?t=1504213621"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,  // before movies
          {
            title: "newHunger",
            poster: "https://steamcdn-a.akamaihd.net/steam/apps/416560/header.jpg?t=1504213621"
          }
        ]
      })
    }, 2000)
  }


  render() {
    return (
      <div className="App">
          {this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })}
      </div>
    );
  }

}

export default App;
