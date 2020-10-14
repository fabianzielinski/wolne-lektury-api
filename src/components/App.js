import React, {Component} from 'react';
import './App.css';
import ButtonList from  './ButtonList'
import ListAudio from  './ListAudio'
import FormSearch from  './FormSearch'

// const API = "https://wolnelektury.pl/api/";
const APIAudioBooks = "https://wolnelektury.pl/api/audiobooks";
const APIBooks = "https://wolnelektury.pl/api/books";


class App extends Component {
  state = { 
    audiobooks:[], 
    books:[],
    itemList:[],
    list: '',
    searchText: ''
  }

  handleClickAudioBooks = () => {
    // const api = API+"audiobooks";
    // this.handleDataFetch(api)
    this.setState({
      itemList:this.state.audiobooks,
      list: "audiobooków"
    })
  }

  handleClickBooks = () => {
    // const api = API+"books";
    // this.handleDataFetch(api)
    this.setState({
      itemList: this.state.books,
      list: "książek"
    })
  }

  handleClickClear = ()=> {
    this.setState({
      itemList: [],
      list: '',
      searchText: ''
    })
  }

  handleDataFetch = (api, part) => {
    fetch(api)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("Błąd!!!");
        })
        .then((response) => response.json())
        .then((data) => {
          if(part === "audiobooks") {
              this.setState(() => ({
                audiobooks: data  
              }));
          }else{
              this.setState(() => ({
                books: data  
              }));
        }})
        .catch((error) => console.log(error));
  }

  handleChangeSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const itemList = [...this.state.itemList].filter(item => item.author.toLowerCase().includes(searchText)|| item.title.toLowerCase().includes(searchText))
    
    this.setState({
      itemList: itemList,
      searchText
    })
  }

  componentDidMount() {
    this.handleDataFetch(APIAudioBooks, "audiobooks");
    this.handleDataFetch(APIBooks, "books");
  }

  render() { 
    return ( <div className="App">
    <ButtonList click={this.handleClickAudioBooks} bTitle={"Lista Audioboków"}/>
    <ButtonList click={this.handleClickClear} bTitle={"Czyszczenie Listy"}/>
    <ButtonList click={this.handleClickBooks} bTitle={"Lista Książek"}/>
    <FormSearch change={this.handleChangeSearch} serchText={this.state.searchText}/>
    <ListAudio itemList={this.state.itemList} list={this.state.list}/>
  </div> );
  }
}
 
export default App;
