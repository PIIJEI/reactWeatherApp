var React = require('react');

class SelectWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onHandleClick(event) {
    var locationSelect = this.state.value;

    if(locationSelect) {
      console.log('Selected Location: ' + locationSelect);
    }
  }

  render() {
    return (
      <div className="rightCol">
        <label>Or select from the list below:</label>
        <select id="listCity" value={this.state.value} onChange={this.handleChange}>
          <option value='' defaultValue disabled>Select your city...</option>
          <option value='Warszawa'>Warsaw, PL</option>
          <option value='Berlin'>Berlin, DE</option>
          <option value='London'>London, UK</option>
          <option value='Amsterdam'>Amsterdam, NL</option>
          <option value='Paris'>Paris, FR</option>
          <option value='Oslo'>Oslo, NO</option>
          <option value='Madrit'>Madrit, ES</option>
          <option value='Bern'>Bern, SZ</option>
          <option value='Stockholm'>Stockholm, SWE</option>
        </select>
        <button className="bottomRow button hollow expanded" onClick={this.onHandleClick}>Get Weather <span className="cityName">{this.state.value}</span></button>
      </div>
    );
  }
};

module.exports = SelectWeather;
