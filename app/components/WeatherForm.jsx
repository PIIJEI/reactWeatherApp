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
              <input type="search" ref="location" placeholder="Search weather by city..."/>
              <button className="button hollow expanded">Get Weather</button>
            </div>
            <div className="rightCol">
              <SelectWeather/>
            </div>
          </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
