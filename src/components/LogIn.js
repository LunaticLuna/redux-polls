import React from 'react'
import { connect } from 'react-redux'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { setAuthedUser } from '../actions/authedUser'

class LogIn extends React.Component{
  state = {
    listOpen : false,
    selected:''
  }
  toggleListOpen = () =>{
    this.setState((prev) => ({
      listOpen: !prev.listOpen
    }))
  }
  selectUser = (id) => {
    this.setState({
      selected: id
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.selected === ''){
      return
    }
    this.props.dispatch(setAuthedUser(this.state.selected))
  }
  render(){
    const { listOpen,selected } = this.state
    const { users } = this.props
    console.log(this.state)
    return (
        <div className = 'dd-container'>
          Poll
          {console.log(listOpen)}
          <div className = 'dd-header'>
            <div className = 'dd-box'
                  onClick = {this.toggleListOpen}>
              <div className = 'dd-header-title'>
                {selected === ''
                  ? <span>Select Character</span>
                  : <span>{users[selected].name}</span>
                }
              </div>
              
              {listOpen
                  ? <FaAngleUp />
                  : <FaAngleDown />
              }
            </div>
            <button className = 'dd-submit-btn'
                    onClick = {this.handleSubmit}
              >

                    Log In</button>
          </div>
          {listOpen &&
            <ul>
              {Object.keys(users).map((id) => (
                <li key = {id}
                    className = 'dd-users'
                    onClick = {() => this.selectUser(id)}
                    >
                    {users[id].name}
                </li>
              ))}
            </ul>
            }
          
        </div>
      )
  }
}
function mapStateToProps({ users }){
  return {users}
}

export default connect(mapStateToProps)(LogIn)