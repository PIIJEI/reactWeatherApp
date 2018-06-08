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
      <div className="wrapperCol">
        <div classNam="leftCol">
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search weather by city..."/>
            <button className="button hollow expanded">Get Weather</button>
          </form>
        </div>
        <SelectWeather/>
      </div>
    );
  }
});

module.exports = WeatherForm;
