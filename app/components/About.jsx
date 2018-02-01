var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="text-center">A short introduction to this Weather App made in ReactJS</p>
      <p className="text-center">
        A very basic <strong className="label primary">Weather App</strong> built with <strong className="label warning">ReactJS</strong>.<br/> Project was worked on with the guidance of <span className="label alert">The Complete React Web App Developer Course</span>.
      </p>
      <ul className="menu">
        <li>
          <a href='https://github.com/PIIJEI/reactWeatherApp' className='text-center' target='_blank'>GitHub Project</a>
        </li>
        <li>
          <strong>Author: Piotr &quot;PJ&quot;</strong>
        </li>
      </ul>
      <h2>Tools Used:</h2>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used the Open Weather Map for API to gather the weather data by City Name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
