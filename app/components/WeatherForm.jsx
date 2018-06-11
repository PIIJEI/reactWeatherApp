var React = require('react');
var SelectWeather = require('SelectWeather');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="wrapperCol">
          <div className="leftCol">
            <input
              id="weatherName"
              type="search"
              ref="location"
              placeholder="Search weather by city name..."/>
          </div>
          <SelectWeather />
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
