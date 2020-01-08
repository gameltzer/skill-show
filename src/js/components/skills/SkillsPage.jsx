const React = require('react')
const Link = require('react-router-dom').Link
const skills = require('../../../api/SkillsData').skills

class Skills extends React.Component{
  constructor(props) {
    super(props)
    this.addListItem = this.addListItem.bind(this)
    this.state = {skills}
  }

  addListItem(skill) {
    return (
      <li className="list-group-item">{skill}</li>
    )
  }
  render(){
    return (
      <div>
        <h2 className="text-center well">Skills</h2>
        <ul className="list-group">
          {this.state.skills.map(
            (item) => this.addListItem(item.skill) 
          )}
        </ul>
        <p>
          <Link to="addskills" 
            className="btn btn-primary col-sm-offset-5 col-md-2 col-lg-2
            col-md-offset-5 col-lg-offset-5">
            Add Skills
          </Link></p>    
      </div>
    )
  }
}

module.exports = Skills