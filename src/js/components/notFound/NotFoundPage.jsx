const React = require('react')

class NotFound extends React.Component{
  render() {
    return (
      <div className="bg-warning">
        <h1 className="jumbotron">
        404! <small>Nothing has been found</small>
        </h1>
      </div>
    )
  }
}

module.exports = NotFound