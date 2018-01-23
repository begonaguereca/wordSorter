import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Sorter from './components/Sorter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>Sort that Word</h1>
        <Sorter/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
