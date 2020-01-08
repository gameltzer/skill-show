const React = require('react')
const PropTypes = require('prop-types')

class TextInput extends React.Component{
  render() {
    let wrapperClass = 'form-group'
    if (this.props.error && this.props.error.length > 0){
      wrapperClass += ' ' + 'has-error'
    }
    return (
      <div className={wrapperClass}>
        <label className="control-label col-sm-1" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <div className="field col-sm-11">
          <input 
            type="text"
            name={this.props.name}
            className="form-control"
            ref={this.props.name}
            onChange={this.props.onChange}
            value={this.props.skill}
          />
        </div>
        <div className="input">{this.props.error}</div>
      </div>
    )
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
}
// name/ label value on change
module.exports = TextInput