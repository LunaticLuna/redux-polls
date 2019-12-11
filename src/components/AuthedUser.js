import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class AuthedUser extends React.Component{
  handleLogOut = (e) =>{
    e.preventDefault()

    this.props.dispatch(setAuthedUser(null))

  }
  render(){
    const { isLoading, authedUser } = this.props
    if (isLoading === true){
      return null
    }
    return(
      <div className = 'authedAvatar'>
        <h4>{authedUser.name}</h4>
        <img src={authedUser.avatarURL} alt = 'authedUser Avatar' />
        <button 
          className = 'logout-btn'
          onClick = {this.handleLogOut} >
          Log Out
        </button>
      </div>
    )
  }
}
function mapStateToProps({ authedUser, users }){
  return { 
    isLoading: authedUser === null,
    authedUser: users[authedUser]
  }
}
export default connect(mapStateToProps)(AuthedUser)