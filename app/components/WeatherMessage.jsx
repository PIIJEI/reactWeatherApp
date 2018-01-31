var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">There is {temp} degree in {location}</h3>
  )
};

module.exports = WeatherMessage;
