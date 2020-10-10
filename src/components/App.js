import React, {Component} from 'react';
import './App.css';
import ButtonList from  './ButtonList'
import ListAudio from  './ListAudio'

const API = "https://wolnelektury.pl/api/";


class App extends Component {
  state = { 
    audiobooks:[], 
    list: ''
  }

  handleClickAudioBooks = () => {
    const api = API+"audiobooks";
    // console.log(api);
    this.handleDataFetch(api)
    this.setState({
      list: "audiobooków"
    })
  }

  handleClickBooks = () => {
    const api = API+"books";
    // console.log(api);
    this.handleDataFetch(api)
    this.setState({
      list: "książek"
    })
  }

  handleClickClear = ()=> {
    this.setState({
      audiobooks:[],
      list: ''
    })
  }

  handleDataFetch = (api) => {
    fetch(api)
        .then((response) => {
          if (response.ok) {
            // console.log(response);
            return response;
          }
          throw Error("Błąd!!!");
        })
        .then((response) => response.json())
        .then((data) => {
          // const a = data.results;
          this.setState(() => ({
            audiobooks: data
          }));
        })
        .catch((error) => console.log(error));
  }

  render() { 
    return ( <div className="App">
    <ButtonList click={this.handleClickAudioBooks} bTitle={"Lista Audioboków"}/>
    <ButtonList click={this.handleClickClear} bTitle={"Czyszczenie Listy"}/>
    <ButtonList click={this.handleClickBooks} bTitle={"Lista Książek"}/>
    <ListAudio audiobooks={this.state.audiobooks} list={this.state.list}/>
  </div> );
  }
}
 
export default App;
