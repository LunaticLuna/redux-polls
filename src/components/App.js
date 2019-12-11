import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import LogIn from './LogIn'


class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className = 'container'>
            
            {this.props.loading === true
              ? <LogIn />
              : <React.Fragment>
                <Nav />
                <div>
                  <Route path = '/' exact component = {Dashboard} />
                  <Route path = '/leaderboard'  component = {Leaderboard} />
                  <Route path = '/polls/:id'  component = {Poll} />
                  <Route path = '/add' component = {AddPoll} />
                </div>
                </React.Fragment>
            }
          </div>
        </Fragment> 
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)