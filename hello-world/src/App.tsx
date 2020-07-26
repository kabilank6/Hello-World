import React from 'react';
import './App.css';
import Paramore from './Paramore.jpg'
import U2 from './U2.jpg'

interface IState {
  chosen: any,
  artist: any,
  song: any,
  lyrics: any,
}

class App extends React.Component<{},IState>{
  state = {
    chosen: "0",
    artist: "",
    song: "",
    lyrics: ""
  }
  handleTryAgain = (e: any) => {
    e.preventDefault();
    this.setState({
        chosen: "0",
        artist: "",
        song: "",
        lyrics: ""
    })
  }
  handleArtistChange = (e: any) => {
    this.setState({
      artist: e.target.value
    })
  }
  handleSongChange = (e: any) => {
    this.setState({
      song: e.target.value
    })
  }
  handleSubmit = (e: any) => {
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
      console.log(data) 
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
          <div className="container">
            <div className="center">
              <h1>Why, hello there! It's awesome to see you here</h1>
              <h4>Have you ever wondered what the lyrics of your favourite song are? 
                If so, please feel free to search them up below (of course, we will find them for you ;)).</h4>
                <img src={Paramore} className="center" alt="Ain't it fun"/>
              <h6>Disclaimer: Please be sure to put the artist and song in correctly, otherwise we may be looking for something that does not exist!</h6>
              <form onSubmit={this.handleSubmit}>
                <label>Pick a song (For example, Ain't it Fun).</label>
                <input type="text" id="song" onChange={this.handleSongChange} value={this.state.song} />
                <label>Who is the song's artist? (For example, Paramore)</label>
                <input type="text" id="artist" onChange={this.handleArtistChange} value={this.state.artist} />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        );
      }
      else if (this.state.chosen === "1") {
        return (
          <div className="center">
            <h1>Below are the lyrics of "{this.state.song}", by {this.state.artist}, as you like it!</h1>
            <h4>{this.state.lyrics}</h4>
            <img src={U2} className="center" alt="The Miracle of Joey Ramone"/>
            <h6>Keen to try again? The door is open</h6>
            <button className="btn btn-primary" onClick={this.handleTryAgain}>Try Again</button>
          </div>
        )
      }
    }  
}


export default App;
