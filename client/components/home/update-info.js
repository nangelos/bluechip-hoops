import React, {Component} from 'react'
import {addUserInfo, changeUserInfo} from '../../store'
import {connect} from 'react-redux'
import {collegeList} from '../../constants'

class UserData extends Component {
  state = {
    firstName: '',
    lastName: '',
    school: '',
    role: ''
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const {userInfo} = this.props
    const {createUserInfo, updateUserInfo} = this.props

    if (!userInfo['user-info']) {
      createUserInfo(this.state)
    } else {
      const {firstName, lastName, school, role} = userInfo['user-info']

      const checkInfo = async () => {
        let res

        try {
          res = await this.checkEmpty(firstName, lastName, school, role)
        } catch (err) {
          console.error(err)
        }

        updateUserInfo(this.state)
      }

      checkInfo()
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

  cantChange = evt => {
    return alert('Please contact us to change your school or role.')
  }

  render() {
    console.log('this.props: ', this.props)
    const {userInfo} = this.props

    const {userId, firstName, lastName, role, school, schoolId} = userInfo
    return userId ? (
      <div>
        <h2>Welcome Coach {lastName}</h2>
        <div style={{textAlign: 'center'}}>
          <h3>Update User Info</h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <div className="user-input-row">
                  First Name <br />
                  <input
                    type="text"
                    name="firstName"
                    placeholder={firstName}
                    className="user-info-input"
                    onChange={this.handleTextChange}
                  />
                </div>
                <div className="user-input-row">
                  Last Name <br />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={lastName}
                    className="user-info-input"
                    onChange={this.handleTextChange}
                  />
                </div>
                <div className="user-input-row">
                  School <br />
                  <select
                    name="school"
                    onChange={this.cantChange}
                    value={school}
                  >
                    {collegeList.map((school, i) => {
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
                  <select name="role" onChange={this.cantChange} value={role}>
                    <option value="Head Coach">Head Coach</option>
                    <option value="Assistant Coach">Assistant Coach</option>
                  </select>
                </div>
              </div>
              <input type="submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <h3>Welcome Coach</h3>
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
                    {collegeList.map((school, i) => {
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
