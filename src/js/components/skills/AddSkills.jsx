const React = require('react')
const Redirect = require('react-router').Redirect
const toastr = require('toastr')

// const ReactDOM = require('reactDOM')

/* This is a controller view */
const SkillsForm = require('./SkillsForm.jsx')
const saveSkill = require('../../../api/SkillsApi').saveSkill

class AddSkills extends React.Component{
  constructor(props){
    super(props)
    this.state = {skill : '', goBack: null}
    this.changeDescription = this.changeDescription.bind(this)
    this.saveDescription = this.saveDescription.bind(this)
  }

  changeDescription(event){
    const value = event.target.value 
    this.setState({skill: value})
  }

  saveDescription(event){
    event.preventDefault()
    saveSkill(this.state.skill)

    const thisSkill = this.state.skill
    console.log(thisSkill)
    toastr.success(
      'The skill has been saved', 
      'Save successful',
      {closeButton : true,
        showMethod: 'slideDown',
        hideMethod: 'slideUp',
        preventDuplicates: true,
        timeout: 10000})
    this.setState({goBack: <Redirect to="/skills" />})
  }

  render() {
    return (
      <div>
        <SkillsForm 
          skill={this.state.skill} 
          onChange={this.changeDescription}
          onSave={this.saveDescription} />
        {this.state.goBack}
      </div>
      
    )
  }
}

module.exports = AddSkills