import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, isAdmin, isHeadCoach}) => (
  <div>
    <nav
      className="navbar navbar-dark bg-primary"
      style={{margin: '0px', padding: '0px'}}
    >
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/">Home</Link>
          <Link to="/recruits">Recruits</Link>
          <Link to="/calendar">Calendar</Link>
          {isHeadCoach ? <Link to="Staff">Staff</Link> : <span />}
          {isAdmin ? <Link to="/admin">Admin</Link> : <span />}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  if (state.userInfo['user-info']) {
    return {
      isLoggedIn: !!state.user.id,
      isAdmin: state.user.isAdmin,
      isHeadCoach: state.userInfo['user-info'].role === 'Head Coach'
    }
  } else {
    return {
      isLoggedIn: !!state.user.id,
      isAdmin: state.user.isAdmin
    }
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
