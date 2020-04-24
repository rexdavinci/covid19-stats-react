import React, { Component } from 'react';

import './App.css';

import Home from './pages/Home/Home';


class App extends Component {
  state = {
    person: [
      { name: 'Cornelius', place: 'Ogba' },
      { name: 'Chiemerie', place: 'Ikeja' },
      { name: 'Cornelius', place: 'Surulere' },
    ]
  }

  render() {
    return (
      <div className="container py-5 my-5 text-center" >
        <p><Home /> </p>
        <p><Home /> </p>
        <Home name="Corne" place="Lagos"> Good lord</Home>
        <p><Home /> </p>
        <p><Home /> </p>

        <button className="btn btn-success">switch name</button>
      </div>

    );
  }

}

export default App;
