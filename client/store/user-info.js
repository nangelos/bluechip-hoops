import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER_INFO = 'GET_USER_INFO'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUserInfo = user => ({type: GET_USER_INFO, user})

/**
 * THUNK CREATORS
 */

export const fetchUserInfo = userId => async dispatch => {
  let res
  try {
    res = await axios.get(`/api/users/${userId}`)
    dispatch(getUserInfo(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return action.user
    default:
      return state
  }
}
