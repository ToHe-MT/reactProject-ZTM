import 'tachyons'
import CardList from "./Components/CardList"
import SearchBar from './Components/SearchBar';
import React, {Component} from 'react';
import Scroll from "./Containers/Scroll"
import ErrorBoundary from './Containers/ErrorBoundary';
import "./app.css"

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: "",
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response =>response.json())
      .then(users=> this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render (){
    const { robots, searchfield} = this.state;
    
    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if (!robots.length) {
      return <h1 className='tc pa3 br3'>Loading</h1>
    } else {
        return (
          <div className="tc">
            <h1 className='tc'>Kitten Furrends</h1>
              <SearchBar searchChange = {this.onSearchChange}/>
            <Scroll style={{ width: 250, height: 250 }} className="CardsContainer tc">
              <ErrorBoundary className="CardsContainer">
                <CardList robots={filteredRobot}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        )
    }
  } 
}

export default App;
