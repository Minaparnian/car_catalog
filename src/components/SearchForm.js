import React, { Component } from 'react';
import Model from '../models.json';
import Makes from '../makes.json';


export default class SearchForm extends Component {

  renderListItems() {
    this.props.data.map(item => {
      return <option value={item.name}>{item.name}</option>
    })
  }


  render(){
    return(
      <form action="/action_page.php">
        <select name={this.props.name}>
          {this.renderListItems()}
        </select>
      </form>

    );
  }

}
