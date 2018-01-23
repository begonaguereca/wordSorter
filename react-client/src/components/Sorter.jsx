import React from 'react';

class Sorter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	value: '',
			result: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sortString = this.sortString.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

		this.setState({
   	 result: this.sortString(this.state.value)
    });
  }

  handleChange (event) {
    this.setState({
   	 value: event.target.value
    });
  }

  sortString (str) {
    var newArr = str.split('');
    return newArr.sort().join('');
  }


  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
       <label>
         Type here --
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className="output">Alpha Order: {this.state.result}</div>
    </div>
    );
  }
}

export default Sorter;
