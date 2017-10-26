import React, { Component } from 'react';
import Nav from '../components/Nav';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      carOfTheWeek: [
        {

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

         <br/>
         <div className="gray-box">
           {this.state.carOfTheWeek[0].review}
         </div>

        </section>
      </section>


    );
  }
}
