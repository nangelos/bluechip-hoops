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
    getUserInfo(id)
  }

  render() {
    const {email} = this.props
    return (
      <div>
        <UserData userInfo={this.props.userInfo} />
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
