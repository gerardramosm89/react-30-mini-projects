import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <h1>Welcome to Gerry's React-Redux Boiler plate!</h1>
        <h5>Sections</h5>
        <ol>
          <li><Link to="/drumkit">Drum Kit</Link></li>
          <li><Link to="/cssclock">CSS and Javascript Clock</Link></li>
          <li><Link to="/fleximagepanel">Flex Image Panels</Link></li>
          <li><Link to="/ajaxtypeahead">Ajax Type Ahead</Link></li>
        </ol>
      </div>
    );
  }
}

export default Home;