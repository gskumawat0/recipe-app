import React, { Component } from 'react';
import './RecipieApp.css';
import RecipieList from './recipieList' ;


class RecipieApp extends Component {
  
  render() {
    return (
      <div className="App container">
        <RecipieList />
      </div>
    );
  }
}

export default RecipieApp;
