import React, { Component } from 'react';
import './App.css';
import DrinksContainer from './DrinksContainer';
import * as ReactBootstrap from 'react-bootstrap';
import RandomDrink from './RandomDrink'

class App extends Component {

  state= {
    
    martinis: [],
    margaritas: [],
    sours: [],
    cocktails: [],
    random: [],
    toggleShow: true
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


    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail')
    .then(response => response.json())
    .then(cocktails=> {
      this.setState({cocktails: cocktails.drinks})
    })

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(random=> {
      this.setState({random: random.drinks})
    })

    }
 
    handleToggle = () => {
      return this.setState({toggleShow: false})

  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>Cheers!</header>
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootstrap.Navbar.Brand id="nav-title" href="#home">Cheers!</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.NavDropdown title="Drinks" id="collasible-nav-dropdown">
                <ReactBootstrap.NavDropdown.Item href="#action/3.1">Martinis</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="#action/3.2">Margaritas</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="#action/3.3">Sours</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item href="#action/3.4">Cocktails</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Divider />
                <ReactBootstrap.NavDropdown.Item >Random Drink</ReactBootstrap.NavDropdown.Item>
              </ReactBootstrap.NavDropdown>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav> 
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
        {/* {this.state.toggleShow
        ?( */}
        <DrinksContainer martinis={this.state.martinis} margaritas={this.state.margaritas} sours={this.state.sours} cocktails={this.state.cocktails} /> 
        {/* )
        :
        ( */}
          <RandomDrink random={this.state.random} />
        {/* )
        } */}
      </div>
    );
  }
}

export default App;
