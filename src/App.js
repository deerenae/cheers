import React, { Component } from 'react';
import './App.css';
import DrinksContainer from './DrinksContainer';

class App extends Component {

  state= {
    
    martinis: [],
    margaritas: [],
    sours: [],
  }

  componentDidMount(){

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
    .then(response => response.json())
    .then(martinis=> {
      this.setState({martinis: martinis.drinks})
    })

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(margaritas=> {
      this.setState({margaritas: margaritas.drinks})
    })

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sour')
    .then(response => response.json())
    .then(sours=> {
      this.setState({sours: sours.drinks})
    })

 

  }

  render() {
    return (
      <div className="App">
        <h1>Cheers!</h1>
        <DrinksContainer martinis={this.state.martinis} margaritas={this.state.margaritas} sours={this.state.sours} />
      </div>
    );
  }
}

export default App;
