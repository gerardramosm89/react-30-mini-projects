import React, { Component } from 'react';
import axios from 'axios';

export default class AjaxTypeAhead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      text: '',
      matches: []
    }
  }
  componentDidMount() {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    axios.get(endpoint)
      .then(res => {
        this.setState({ cities: res.data })
      });
  }
  inputChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value }, () => {
      this.setState({ matches: findMatches(this.state.text, this.state.cities)})
    });

    function findMatches(wordToMatch, cities) {
      return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
      })
    }
  }

  renderMatchesList() {
    return this.state.matches.map(match => {
      const regex = new RegExp(this.state.text, 'gi');
      const cityHl = match.city.replace(regex, `<span class="hl">${this.state.text}</span>`);
      const stateHl = match.state.replace(regex, `<span class="hl">${this.state.text}</span>`)
      return (
        <li key={match.population + Math.random(0,1000)}>
          <span className="name"><span dangerouslySetInnerHTML={{__html: cityHl}}/>, <span dangerouslySetInnerHTML={{__html: stateHl}}/></span>
          <span className="population">{match.population}</span>
        </li>
      );
    })
  }
  renderList() {
    if (this.state.matches.length > 0 && this.state.text.length > 0) {
      return this.renderMatchesList();
    } else {
      return (
        <span>
        <li>Filter for a city</li>
        <li>or a state</li>
        </span>
      );
    }
  }
  render() {
    return(
      <div className="ajaxtypeahead-container">
        <form className="search-form">
          <input onChange={this.inputChange.bind(this)} type="text" className="search" placeholder="City or State" />
          <ul className="suggestions">
            {this.renderList()}
          </ul>
        </form>
      </div>
    );
  }
}