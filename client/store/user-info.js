import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER_INFO = 'GET_USER_INFO'
const CREATE_USER_INFO = 'CREATE_USER_INFO'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const DELETE_USER_INFO = 'DELETE_USER_INFO'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUserInfo = user => ({type: GET_USER_INFO, user})
const createUserInfo = user => ({type: CREATE_USER_INFO, user})
const updateUserInfo = user => ({type: UPDATE_USER_INFO, user})
const deleteUserInfo = user => ({type: DELETE_USER_INFO, user})

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

export const addUserInfo = info => async dispatch => {
  let res
  try {
    res = await axios.post(`/api/users`, info)
  } catch (err) {
    console.error(err)
  }
  try {
    dispatch(createUserInfo(res.data))
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
    case CREATE_USER_INFO:
      return action.user
    default:
      return state
  }
}
