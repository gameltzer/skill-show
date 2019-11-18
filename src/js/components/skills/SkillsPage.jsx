const React = require('react')
const ReactDOM = require('react-dom')

class Skills extends React.Component{
  render(){
    return (
      <div>
        <p>Skills page</p>
        <ul>JS and Web Technologies
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>REST apis</li>
          <li>React.js</li>
        </ul>
        <ul>AWS
          <li>Lambda</li>
          <li>Elastic beanstalk</li>
          <li>Deployments and integration testing.</li>
        </ul>
      </div>
    )
  }
}

module.exports = Skills