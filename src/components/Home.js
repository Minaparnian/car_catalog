import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div class="home">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
          </ul>
        </nav>
        <div>
         <h1>Display car of the week</h1>
        </div>
      </div>


    );
  }
}
