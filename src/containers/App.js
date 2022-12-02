import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchfield: ''
    }
  }

  getPokemonData = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1154');
    const data = await resp.json();
    const infoPerPokemon = data.results;
    const urls = [];
    
    for (const item in infoPerPokemon) {
      urls.push(infoPerPokemon[item].url)
    }
    return urls;
  }
  
  componentDidMount() {
    const data = []

    this.getPokemonData().then(async array => {
      for (let url of array){
        data.push(await fetch(url)
        .then(response => response.json()))
      }
      this.setState({ pokemons: data })
    })
  }
 
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { pokemons, searchfield } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !pokemons.length ? 
    <h1>Loading</h1> : 
    (
      <>
      <div className='tc'>
        <h1 className='f1'>Pokemons</h1>
        <div id="search">
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <div id='body'>
          
          <ErrorBoundry>
            <CardList pokemons={filteredPokemons}/>
          </ErrorBoundry>
        </div>  
      </div>
        
      </>
    )
  }
}


export default App;
