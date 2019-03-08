import React, {useContext, useEffect} from 'react'
import axios from 'axios'
import UserData from './update-info'
import {connect} from 'react-redux'
import {RootContext} from '../../RootProvider'

/**
 * COMPONENT
 */

function UserHome({id}) {
  const {setCurrentUser, user} = useContext(RootContext)
  const userInfo = user['user-info']
  useEffect(() => {
    axios.get(`/api/users/${id}`).then(res => setCurrentUser(res.data))
  }, [])

  if (!userInfo) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <UserData userInfo={userInfo} />
    </div>
  )
}

// UserHome.contextType = RootContext for class only

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // email: state.user.email,
    id: state.user.id
  }
}

export default connect(mapState)(UserHome)
