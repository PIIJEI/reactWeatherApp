var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h4>There is {temp} degree in {location}</h4>
  )
};

module.exports = WeatherMessage;
