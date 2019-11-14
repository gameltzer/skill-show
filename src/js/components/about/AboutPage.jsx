const React = require('react')
const ReactDOM = require('react-dom')

class About extends React.Component{
  render(){
    return (
      <div>
        <h1>About this App</h1>
        <p>A simple way to demonstrate skills</p>
        <ul>
          <li>React</li> 
          <li>ReactDOM</li>
          <li>Flux</li>
          <li>Node.js</li>
          <li>Gulp</li>
          <li>Browserify</li>
        </ul>
      </div>
    )
  }
}

module.exports = About