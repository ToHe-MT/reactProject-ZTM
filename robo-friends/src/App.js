
import 'tachyons'
import {robots} from "./robots"
import CardList from "./Components/CardList"
import SearchBar from './Components/SearchBar';
import React from 'react';

class App extends React.Component() {
  constructor(){
    super();
    this.state={
      robots: robots,
      searchfield: "",
    }
  }
  render () {
    return (
      <div className="App">
        <h1 className='tc'>Kitten Furrends</h1>
        <SearchBar/>
        <div className="CardsContainer tc ">
          <CardList robots={robots}/>
        </div>
      </div>
    );
  }
}

export default App;
