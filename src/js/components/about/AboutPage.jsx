const React = require('react')

class About extends React.Component{
  render(){
    return (
      <div>
        <h1 className='well'>About this App</h1>
        <p id='about' className='panel'>The goal of this app is to
         demonstrate React fluency. 
          The app displays the list of skills the user may have. 
          It also allows the user to 
          add any new skills to the list.</p>
      </div>
    )
  }
}

module.exports = About