import React, { Component } from 'react';

import Location from './Location.jsx';

// App component - represents the whole app
export default class App extends Component {
  getLocations() {
    return [
      { _id: 1, text: 'This is location 1' },
      { _id: 2, text: 'This is location 2' },
      { _id: 3, text: 'This is location 3' },
    ];
  }

  renderLocations() {
    return this.getLocations().map((location) => (
      <Location key={location._id} location={location} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Locations List</h1>
        </header>

        <ul>
          {this.renderLocations()}
        </ul>
      </div>
    );
  }
}
