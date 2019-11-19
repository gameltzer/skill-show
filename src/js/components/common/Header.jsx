const React = require('react')
const ReactDOM = require('react-dom')
const Link = require('react-router-dom').Link


class Header extends React.Component{
  constructor(){
    super()
  }
  // This gets the current elements of the navbar list
  getListArray(){
    const nav =document.getElementsByTagName('nav')
    return nav[0].children[0].children[0].children
  }

  setSelected(listElements, selectedElement){
    for (const item of listElements ){
      if (item.children[0].innerHTML === selectedElement) {
        item.className =  'active'
      }
      else{
        item.className = ''
      }
    }
  }
  componentDidMount() {
    const selectedElement = this.props.selected
    const listArray = this.getListArray()
    this.setSelected(listArray, selectedElement)

  }

  componentDidUpdate() {
    const selectedElement = this.props.selected
    const listArray = this.getListArray()
    console.log('change')
    this.setSelected(listArray, selectedElement)
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav nav-pills">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

module.exports = Header