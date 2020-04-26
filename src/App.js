import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Country from './pages/Country/Country';

class App extends Component {
  state = {
    title: 'Covid-19 global stats',
    link: 'https://twitter.com/Comlyboy',
  }

  render() {
    return (
      <BrowserRouter>
        <div id="page-container">
          <div id="content-wrap">
            <Header title={this.state.title}></Header>
            {/* <Home /> */}
            {/* <Country></Country> */}

            <Switch>
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/countries" component={Country} />
              </div>
            </Switch>
          </div>
          <footer className="bg" id="footer">
            <Footer link={this.state.link}></Footer>
          </footer>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
