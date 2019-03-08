import React, {Component} from 'react'
import {connect} from 'react-redux'

class Staff extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Here's the Staff of the School</h1>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({})

const mapState = state => {
  // return {
  return state
  // }
}

export default connect(mapState, mapDispatch)(Staff)
