import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Locations } from '../api/locations.js';
import Location from './Location.jsx';

// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
  event.preventDefault();

  // Find the text field via the React ref
  const name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

  Locations.insert({
    name,
    createdAt: new Date(), // current time
  });

  // Clear form
  ReactDOM.findDOMNode(this.refs.textInput).value = '';
}

  renderLocations() {
    return this.props.locations.map((location) => (
      <Location key={location._id} location={location} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Locations</h1>
          <form className="new-location" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new location"
            />
          </form>
        </header>

        <ul>
          {this.renderLocations()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  locations: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    locations: Locations.find({}, { sort: { createdAt: -1 } } ).fetch(),
  };
}, App);
