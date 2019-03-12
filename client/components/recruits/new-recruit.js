import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const InputRow = styled.div`
  display: flex;
  width: 100%;
`

const DBInput = styled.p`
  height: 20px;
  background-color: purple;
`

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

  handleTextChange = evt => {
    console.log('evt.target: ', evt.target)
    const {name, value} = evt.target
    this.setState({[name]: value})
  }

  handleSubmit() {
    console.log('send to create prospect: ', this.state)
  }

  render() {
    return (
      <div>
        <h3>Add New Recruit</h3>
        <table style={{border: 'solid, white, 2px'}}>
          <tbody>
            <tr>
              <th className="recruits-header">Name</th>
              <th className="recruits-header">Position</th>
              <th className="recruits-header">Height</th>
              <th className="recruits-header">Weight</th>
              <th className="recruits-header">High School</th>
              <th className="recruits-header">Class</th>
            </tr>
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit} style={{display: 'flex'}}>
          <InputRow>
            <DBInput>
              <input
                className="even-row"
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={this.handleTextChange}
                style={{marginLeft: '0px', marginRight: '0px'}}
              />
            </DBInput>
            <DBInput style={{textAlign: 'center'}}>
              <select
                className="even-row"
                type="text"
                name="position"
                onChange={this.handleTextChange}
              >
                <option value="PG">PG</option>
                <option value="SG">SG</option>
                <option value="SF">SF</option>
                <option value="PF">PF</option>
                <option value="C">C</option>
              </select>
            </DBInput>
            <DBInput>
              <input
                className="even-row"
                type="text"
                name="height"
                placeholder="Height"
                onChange={this.handleTextChange}
                style={{width: '85px'}}
              />
            </DBInput>
            <DBInput>
              <input
                className="even-row"
                type="text"
                name="weight"
                placeholder="Weight"
                onChange={this.handleTextChange}
                style={{width: '85px'}}
              />
            </DBInput>
            <DBInput>
              <input
                className="even-row"
                type="text"
                name="highSchool"
                placeholder="High School"
                onChange={this.handleTextChange}
              />
            </DBInput>
            <DBInput>
              <input
                className="even-row"
                type="text"
                name="class"
                placeholder="Class"
                onChange={this.handleTextChange}
                style={{width: '85px'}}
              />
            </DBInput>
          </InputRow>
          <br />
          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

const mapState = state => ({state})
const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(NewRecruit)
