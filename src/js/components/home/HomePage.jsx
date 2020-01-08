var React = require('react')
var ReactDOM = require('react-dom')

class Home extends React.Component{
  render() {
    return (
      <div className="jumbotron">
        <h1>Skills with React</h1>
        <h2>View and add a list of skills!</h2>
      </div>
    )
  }
}

module.exports =  Home 