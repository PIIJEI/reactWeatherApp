var React = require('react');
var openWeatherMap = require('openWeatherMap');

class SelectWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'default'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //return this.state + value
    if(this.state.value === 'default') {
      console.log('Please select the city...');
    } else {
      return console.log('There is ' + 'X' + ' degree in ' + this.state.value);
    }
  }

  render() {
    return (
      <div className="rightCol customSelect">
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='default' disabled>Select your city...</option>
            <option value='Warszawa'>Warsaw, PL</option>
            <option value='Berlin'>Berlin, DE</option>
            <option value='London'>London, UK</option>
            <option value='Amsterdam'>Amsterdam, NL</option>
            <option value='Paris'>Paris, FR</option>
          </select>
          <button className="button hollow expanded">Show Weather <span>for {this.state.value}</span></button>
        </form>
      </div>
    );
  }
};

module.exports = SelectWeather;
