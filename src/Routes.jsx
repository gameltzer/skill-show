const React = require('react')
const RouterDOM = require('react-router-dom')
const Router = RouterDOM.BrowserRouter
const Switch = RouterDOM.Switch
const Route = RouterDOM.Route
const Header = require('./js/components/common/Header.jsx')
const Home = require('./js/components/home/HomePage.jsx')
const About = require('./js/components/about/AboutPage.jsx')
const Skills = require('./js/components/skills/SkillsPage.jsx')
const AddSkills = require('./js/components/skills/AddSkills.jsx')
class Routes extends React.Component { 
  render() {
    return (<Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/addskills">
          <AddSkills />
        </Route>
      </Switch>
    
    </Router>
    )
  }
}

module.exports = Routes