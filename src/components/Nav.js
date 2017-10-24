import React, { Component } from 'react';

export default class Nav extends Component {
  render(){
    return (

        <section className="navbar">
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
       </section>
    
    );
  }

}
