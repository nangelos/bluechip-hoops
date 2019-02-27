import React, {Component} from 'react'

const recruitList = [
  {
    fullName: 'Michael Jordan',
    highSchool: 'Laney High',
    position: 'SG',
    height: "6'5",
    rivalsRanking: '1',
    espnRanking: '1',
    class: '2019'
  },
  {
    fullName: 'LeBron James',
    highSchool: 'SVSM',
    position: 'SF',
    height: "6'8",
    rivalsRanking: '1',
    espnRanking: '1',
    class: '2019'
  }
]

class Recruits extends Component {
  state = {}

  render() {
    return (
      <div>
        <h1>This is the recruits page</h1>
        <div>
          {recruitList.map(player => {
            return (
              <div key={player.fullName}>
                <span>{player.fullName}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Recruits
