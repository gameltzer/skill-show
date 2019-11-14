$ = jQuery = require('jquery')

const React = require('react')
const ReactDOM = require('react-dom')
const Header = require('./js/components/common/Header.jsx')
const Home = require('./js/components/home/HomePage.jsx')
const About = require('./js/components/about/AboutPage.jsx')

class App extends React.Component{
  render(){
    let Child
    switch (this.props.route) {
    case 'about':
      Child = About
      break
    default: 
      Child = Home
      break
    }
    return (
      <div>
        {/* <Header /> */}
        <Child />
      </div>
    )
  }
}
function _routeMe() {
  const route = window.location.hash.substr(1)
  ReactDOM.render(<App route={route} />, document.getElementById('app'))
}

window.addEventListener('hashchange', _routeMe)
_routeMe