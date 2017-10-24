import React, { Component } from 'react';
import Nav from '../components/Nav';

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
           <form action="/action_page.php">
              <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
              <br />
              <input type="submit"/>
           </form>
        </section>
      </section>


    );
  }
}
