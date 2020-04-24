import React, { Component } from 'react';

import './App.css';

import Home from './pages/Home/Home';
import Header from './shared/components/Header';


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
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Home />
        </div>
        <footer className="bg" id="footer">
          <div className="py-3 footer d-flex justify-content-center">
            Designed by: <span className="ml-2">
              <a target="_blank" className="text-green" href="https://twitter.com/Comlyboy"> Cornelius
                    Okeke</a></span>
          </div>

        </footer>
      </div>
    );
  }

}

export default App;
