import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receivePolls } from '../actioins/polls'
import { setAuthedUser } from '../actioins/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
  return (dispatch) =>{
    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}