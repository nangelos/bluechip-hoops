import React, {Component} from 'react'
import {fetchUserInfo} from '../../store'
import UserData from './update-info'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

class UserHome extends Component {
  state = {}

  componentDidMount() {
    const {getUserInfo, id} = this.props
    // getUserInfo(id)
  }

  render() {
    const {email, firstName, lastName, school} = this.props
    return (
      <div>
        <h3>{`Welcome, Coach ${firstName} ${lastName}`}</h3>
        <UserData />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id
    // firstName: state.user.firstName,
    // lastName: state.user.lastName,
    // school: state.user.school
  }
}
const mapDispatch = dispatch => ({
  getUserInfo: userId => dispatch(fetchUserInfo(userId))
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
