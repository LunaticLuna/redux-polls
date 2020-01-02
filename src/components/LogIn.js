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
      selected: id,
      listOpen:false,
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
          <h1 className = 'center'>Log In</h1>
          <div className = 'dd-content'>
            <h2>Select a Character...</h2>
            <div className = 'dd-box'
                  onClick = {this.toggleListOpen}>
              <div className = 'dd-header-title'>
                {selected === ''
                  ? <span style = {{display:'inline-block',opacity:0.5,margin:'5px'}}> Select Character</span>
                  : <div className = 'dd-users'>
                      <img src={users[selected].avatarURL} alt = 'user Avatar'/>
                      <span className='dd-user-name'>{users[selected].name}</span>
                    </div>
                }
              </div>
              
              {listOpen
                  ? <FaAngleUp className = 'angle' size = {30}/>
                  : <FaAngleDown className = 'angle' size = {30}/>
              }
            </div>
            <button className = 'dd-submit-btn'
                    onClick = {this.handleSubmit}
              >

                    Log In</button>
          </div>
          {listOpen &&
            <ul className = 'dd-user-list'>
              {Object.keys(users).map((id) => (
                <li key = {id}
                    className = 'dd-users'
                    onClick = {() => this.selectUser(id)}
                    >
                    <img src={users[id].avatarURL} alt = 'user Avatar'/>
                    <span className='dd-user-name'>{users[id].name}</span>
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