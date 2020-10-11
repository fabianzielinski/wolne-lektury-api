import React, {Component} from 'react';
import './App.css';
import ButtonList from  './ButtonList'
import ListAudio from  './ListAudio'
import FormSearch from  './FormSearch'

const API = "https://wolnelektury.pl/api/";


class App extends Component {
  state = { 
    audiobooks:[], 
    list: '',
    searchText: ''
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
      list: '',
      searchText: ''
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

  handleChangeSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const audiobooks = [...this.state.audiobooks].filter(item => item.author.toLowerCase().includes(searchText)|| item.title.toLowerCase().includes(searchText))
    
    this.setState({
      audiobooks:audiobooks,
      searchText
    })
  }

  render() { 
    return ( <div className="App">
    <ButtonList click={this.handleClickAudioBooks} bTitle={"Lista Audioboków"}/>
    <ButtonList click={this.handleClickClear} bTitle={"Czyszczenie Listy"}/>
    <ButtonList click={this.handleClickBooks} bTitle={"Lista Książek"}/>
    <FormSearch change={this.handleChangeSearch} serchText={this.state.searchText}/>
    <ListAudio audiobooks={this.state.audiobooks} list={this.state.list}/>
  </div> );
  }
}
 
export default App;
