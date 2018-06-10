var React = require('react');
var WeatherMessage = require('WeatherMessage');

class SelectWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    /*this.handleSubmit = this.handleSubmit.bind(this);*/
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  /* handleSubmit(event) {
    event.preventDefault();

    if(this.state.value === 'default') {
      console.log('Please select the city...');
    } else {
      return console.log('There is ' + temp + ' degree in ' + this.state.value);
    }

    var location = this.refs.location.value;
    var temp = this.refs.temp;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  */

  render() {
    return (
      <div className="customSelect">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='' disabled>Select your city...</option>
            <option value='Warszawa'>Warsaw, PL</option>
            <option value='Berlin'>Berlin, DE</option>
            <option value='London'>London, UK</option>
            <option value='Amsterdam'>Amsterdam, NL</option>
            <option value='Paris'>Paris, FR</option>
          </select>
          <button className="button hollow expanded">Get Weather <span className="cityName">{this.state.value}</span></button>
      </div>
    );
  }
};

module.exports = SelectWeather;
