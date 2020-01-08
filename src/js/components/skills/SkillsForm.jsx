const React = require('react')

const Input = require('../common/TextInput.jsx')

class SkillsForm extends React.Component{
  render() {
    return (
      <form>
        <h2 className="text-center well">Add a skill</h2>
        <Input
          name='skill'
          label='Skill'
          onChange={this.props.onChange}
          value={this.props.skill}>
        </Input>
        <input type="submit"
          value="Add skill"
          className="btn btn-default"
          onClick={this.props.onSave}
        />
      </form>
    )
  }
}

module.exports = SkillsForm