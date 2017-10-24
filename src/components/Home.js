import React, { Component } from 'react';
import Nav from './Nav';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      carOfTheWeek: [
        {
          modelId: 520,
          review: "The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016."
        }
      ]
    }
  }
  render() {
    return (
      <section >
        <Nav/>
        <section class="home">
         <h1>Car of the week</h1>
         {this.state.carOfTheWeek[0].modelId}
         <br/>
         {this.state.carOfTheWeek[0].review}
        </section>
      </section>


    );
  }
}
