import React, {Component} from 'react'
import {addUserInfo, changeUserInfo} from '../../store'
import {connect} from 'react-redux'
import {schoolList} from '../../constants'

class UserData extends Component {
  state = {
    firstName: '',
    lastName: '',
    school: '',
    role: ''
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const {userInfo} = this.props.state
    const {createUserInfo, updateUserInfo} = this.props
    if (!userInfo['user-info']) {
      createUserInfo(this.state)
    } else {
      const {firstName, lastName, school, role} = userInfo['user-info']
      this.checkEmpty(firstName, lastName, school, role)
      updateUserInfo(this.state)
    }
  }

  checkEmpty = (first, last, place, job) => {
    if (this.state.firstName === '') {
      this.setState({firstName: first})
    }
    if (this.state.lastName === '') {
      this.setState({lastName: last})
    }
    if (this.state.school === '') {
      this.setState({school: place})
    }
    if (this.state.role === '') {
      this.setState({role: job})
    }
  }

  handleTextChange = evt => {
    let {name, value} = evt.target
    this.setState({[name]: value})
  }

  render() {
    let info = this.props.state.userInfo['user-info']
    return info ? (
      <div style={{textAlign: 'center'}}>
        <h1>Update User Info</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="user-input-row">
                First Name <br />
                <input
                  type="text"
                  name="firstName"
                  placeholder={info.firstName}
                  className="user-info-input"
                  onChange={this.handleTextChange}
                />
              </div>
              <div className="user-input-row">
                Last Name <br />
                <input
                  type="text"
                  name="lastName"
                  placeholder={info.lastName}
                  className="user-info-input"
                  onChange={this.handleTextChange}
                />
              </div>
              <div className="user-input-row">
                School <br />
                <select
                  name="school"
                  onChange={this.handleTextChange}
                  defaultValue={info.school}
                >
                  {schoolList.map((school, i) => {
                    return (
                      <option key={i} value={school}>
                        {school}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="user-input-row">
                Role <br />
                <select
                  name="role"
                  onChange={this.handleTextChange}
                  defaultValue={info.role}
                >
                  <option value="Head Coach">Head Coach</option>
                  <option value="Assistant Coach">Assistant Coach</option>
                </select>
              </div>
            </div>
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
    ) : (
      <div style={{textAlign: 'center'}}>
        <h1>Update User Info</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="user-input-row">
                First Name <br />
                <input
                  type="text"
                  name="firstName"
                  className="user-info-input"
                  onChange={this.handleTextChange}
                />
              </div>
              <div className="user-input-row">
                Last Name <br />
                <input
                  type="text"
                  name="lastName"
                  className="user-info-input"
                  onChange={this.handleTextChange}
                />
              </div>
              <div className="user-input-row">
                School <br />
                <select name="school" onChange={this.handleTextChange}>
                  {schoolList.map((school, i) => {
                    return (
                      <option key={i} value={school}>
                        {school}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="user-input-row">
                Role <br />
                <select name="role" onChange={this.handleTextChange}>
                  <option value="Head Coach">Head Coach</option>
                  <option value="Assistant Coach">Assistant Coach</option>
                </select>
              </div>
            </div>
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => ({state})
const mapDispatch = dispatch => ({
  createUserInfo: data => dispatch(addUserInfo(data)),
  updateUserInfo: data => dispatch(changeUserInfo(data))
})

export default connect(mapState, mapDispatch)(UserData)
