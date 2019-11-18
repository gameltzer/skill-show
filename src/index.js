$ = jQuery = require('jquery')

const React = require('react')
const ReactDOM = require('react-dom')
const Header = require('./js/components/common/Header.jsx')
const Home = require('./js/components/home/HomePage.jsx')
const About = require('./js/components/about/AboutPage.jsx')
const Skills = require('./js/components/skills/SkillsPage.jsx')


class App extends React.Component{
  constructor(){
    super()
    this.state = {selected: 'Home'}
  }

  render(){
    let Child
    switch (this.props.route) {
    case 'about':
      Child = About
      this.state = {selected: 'About'}
      break
    case 'skills':
      Child = Skills
      this.state = {selected: 'Skills'}

      break
    default: 
      Child = Home
      this.state = {selected: 'Home'}
      break
    }
    return (
      <div>
        <Header selected={this.state.selected}/>
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
_routeMe()