import React, {Component} from 'react'
import RecruitTable from './table'
import TabRow from './tab-row'
import NewRecruit from './new-recruit'
import {RootContext} from '../../RootProvider'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  height: 100%;
`

const recruitList = [
  {
    fullName: 'Michael Jordan',
    highSchool: 'Laney High',
    position: 'SG',
    height: "6'5",
    weight: '195',
    rivalsRanking: '1',
    espnRanking: '1',
    class: '2020'
  },
  {
    fullName: 'LeBron James',
    highSchool: 'St. Vincent St. Mary',
    position: 'SF',
    height: "6'8",
    weight: '230',
    rivalsRanking: '1',
    espnRanking: '1',
    class: '2019'
  },
  {
    fullName: 'Chris Paul',
    highSchool: 'Winston Salem South',
    position: 'PG',
    height: "6'0",
    weight: '165',
    rivalsRanking: '3',
    espnRanking: '3',
    class: '2019'
  }
]

class Recruits extends Component {
  state = {selectedYear: 2019}

  years = [2019, 2020, 2021, 2022]

  changeYear = year => {
    this.setState({selectedYear: year})
  }

  componentDidMount() {
    console.log('get school/recruit info')
  }

  render() {
    const userInfo = this.context.user['user-info']
    console.log('here is userInfo: ', userInfo)
    return (
      <Wrapper>
        {userInfo ? (
          <h1>This is the recruits page for {userInfo.school}</h1>
        ) : (
          ''
        )}
        <TabRow
          selectedYear={this.state.selectedYear}
          years={this.years}
          changeYear={this.changeYear}
        />
        <RecruitTable
          recruitList={recruitList}
          selectedYear={this.state.selectedYear}
        />
        <NewRecruit
          recruitList={recruitList}
          handleTextChange={this.handleTextChange}
        />
      </Wrapper>
    )
  }
}

Recruits.contextType = RootContext

export default Recruits
