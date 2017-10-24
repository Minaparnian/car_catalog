import React, { Component } from 'react';
import Nav from '../components/Nav';
import SearchForm from '../components/SearchForm';import Model from '../models.json';
import Makes from '../makes.json';

export default class Search extends Component {
  constructor(props){
    super(props);
     this.state = {query: ''};
  }


  render() {
    return(
      <section>
        <Nav/>
        <section className="home">
         <h1>Choose your car</h1>
              <SearchForm data={Makes} />
              <br />
              <input type="submit"/>

        </section>
      </section>


    );
  }
}
