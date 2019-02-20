import React, {Component} from 'react'
import {addUserInfo} from '../../store'
import {connect} from 'react-redux'
import {schoolList} from '../../constants'

class UserData extends Component {
  state = {
    firstName: '',
    lastName: '',
    school: '',
    role: 'Head Coach'
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const {createUserInfo} = this.props
    // console.log(this.state)
    createUserInfo(this.state)
  }

  handleTextChange = evt => {
    let {name, value} = evt.target
    this.setState({[name]: value})
  }

  render() {
    return (
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
  createUserInfo: data => dispatch(addUserInfo(data))
})

export default connect(mapState, mapDispatch)(UserData)
