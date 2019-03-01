import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewRecruit extends Component {
  state = {
    fullName: '',
    highSchool: '',
    position: '',
    height: '',
    weight: '',
    rivalsRanking: '',
    espnRanking: '',
    class: ''
  }

  handleSubmit
  render() {
    const {handleTextChange} = this.props
    return (
      <div>
        <h3>Add New Recruit</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="fullName"
            className="user-info-input"
            onChange={handleTextChange}
          />
        </form>
      </div>
    )
  }
}

const mapState = state => ({state})
const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(NewRecruit)
