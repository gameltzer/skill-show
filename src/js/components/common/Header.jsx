const React = require('react')
const ReactDOM = require('react-dom')

class Header extends React.Component{
  render() {
    return (
      <nav className= "navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
          </a>
          <ul className="nav nav-tabs">
            <li><a href="#">Home</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

module.exports = Header