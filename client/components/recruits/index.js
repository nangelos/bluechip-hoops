import React, {Component} from 'react'
import RecruitTable from './table'
import TabRow from './tabs'

const recruitList = [
  {
    fullName: 'Michael Jordan',
    highSchool: 'Laney High',
    position: 'SG',
    height: "6'5",
    weight: '195',
    rivalsRanking: '1',
    espnRanking: '1',
    class: '2019'
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
  state = {year: 2019}

  years = [2019, 2020, 2021, 2022]

  changeYear = evt => {
    evt.preventDefault()
    console.log(evt.target.type)
    const {value} = evt.target
    this.setState({year: value})
  }

  componentDidMount() {
    console.log('get school/recruit info')
  }

  render() {
    return (
      <div align="center">
        <h1>This is the recruits page for {}</h1>
        <TabRow
          state={this.state}
          years={this.years}
          changeYear={this.changeYear}
        />
        <RecruitTable recruitList={recruitList} />
      </div>
    )
  }
}

export default Recruits
