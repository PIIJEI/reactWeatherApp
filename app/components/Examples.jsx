var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Warszawa'>Warszawa, Polska</Link>
        </li>
        <li>
          <Link to='/?location=Manchester'>Manchester, UK</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
