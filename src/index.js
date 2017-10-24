import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter as Router, Route } from 'react-router-dom';


import 'preact/devtools';

import Home from './pages/Home';
import Search from './pages/Search';

const Routes = (
  <Router>
    <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />

    </div>
  </Router>

);


ReactDOM.render(Routes, document.body);
