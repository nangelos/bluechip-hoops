import React, {Component} from 'react'
import history from '../../history'
import {connect} from 'react-redux'
import styled from 'styled-components'

const InputRow = styled.div`
  display: flex;
  width: 100%;
  justify: space-between;
`

const DBInput = styled.p`
  margin: 0px;
`

class NewRecruit extends Component {
  state = {
    fullName: '',
    highSchool: '',
    position: 'PG',
    height: '',
    weight: '',
    rivalsRanking: 'N/A',
    espnRanking: 'N/A',
    class: '2019'
  }

  handleTextChange = evt => {
    const {name, value} = evt.target
    this.setState({[name]: value})
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const {recruitList} = this.props
    recruitList.push(this.state)
    document.getElementById('RecruitForm').reset()
    history.push('/recruits')
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
        <form
          id="RecruitForm"
          onSubmit={this.handleSubmit}
          style={{margin: '0px'}}
        >
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
                style={{pading: '0px 5px'}}
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
          <input type="submit" value="Add Player" />
        </form>
      </div>
    )
  }
}

const mapState = state => ({state})
const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(NewRecruit)
