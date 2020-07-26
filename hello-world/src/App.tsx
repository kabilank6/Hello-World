import React from 'react';
import './App.css';

interface IState {
  chosen: any,
  artist: any,
  song: any,
  lyrics: any
}

class App extends React.Component<{},IState>{
  state = {
    chosen: "0",
    artist: "",
    song: "",
    lyrics: ""
  }
  handleTryAgain = (e) => {
    e.preventDefault();
    this.setState({
        chosen: "0",
        artist: "",
        song: "",
        lyrics: ""
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleArtistChange = (e) => {
    this.setState({
      artist: e.target.value
    })
  }
  handleSongChange = (e) => {
    this.setState({
      song: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const text = {
        song : this.state.song,
        artist: this.state.artist
    };
    console.log(text);
    let current = this;
    const url = "https://api.lyrics.ovh/v1/".concat("/", this.state.artist, "/", this.state.song);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      const items = data;
      console.log(items.lyrics);
      current.setState({
        chosen: "1",
        lyrics: items.lyrics
      })
    })
    .catch(error => console.error(error))
  }

    render() {
      if (this.state.chosen === "0") {
        return (
          <div className="center">
            <h1>Hello world!</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Pick a song (For example, Ain't it Fun).</label>
              <input type="text" id="song" onChange={this.handleChange} value={this.state.song} />
              <label>Who is the song's artist? (For example, Paramore)</label>
              <input type="text" id="artist" onChange={this.handleChange} value={this.state.artist} />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        );
      }
      else if (this.state.chosen === "1") {
        return (
          <div className="center">
            <h1>Below are the lyrics of {this.state.song}, by {this.state.artist}, as you like it!</h1>
            <h4>{this.state.lyrics}</h4>
            <button className="btn btn-primary" onClick={this.handleTryAgain}>Try Again</button>
          </div>
        )
      }
    }  
}


export default App;
