import React, {Component} from 'react'
import RecruitTable from './table'

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
  state = {}

  componentDidMount() {
    console.log('get school/recruit info')
  }

  render() {
    return (
      <div align="center">
        <h1>This is the recruits page for {}</h1>
        <RecruitTable recruitList={recruitList} />
      </div>
    )
  }
}

export default Recruits
