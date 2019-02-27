import React, {Component} from 'react'

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
  }
]

class Recruits extends Component {
  state = {}

  render() {
    return (
      <div align="center">
        <h1>This is the recruits page</h1>
        <table style={{border: 'solid, white, 2px'}}>
          <tbody>
            <tr>
              <th className="recruits-header">Name</th>
              <th className="recruits-header">Position</th>
              <th className="recruits-header">Height</th>
              <th className="recruits-header">Weight</th>
              <th className="recruits-header">High School</th>
              <th className="recruits-header">Rivals Ranking</th>
              <th className="recruits-header">ESPN Ranking</th>
              <th className="recruits-header">Class</th>
            </tr>

            {recruitList.map((player, i) => {
              return (
                <tr key={player.fullName}>
                  <td className={i % 2 === 0 ? 'odd-row' : 'even-row'}>
                    {player.fullName}
                  </td>
                  <td
                    className={i % 2 === 0 ? 'odd-row' : 'even-row'}
                    style={{textAlign: 'center'}}
                  >
                    {player.position}
                  </td>
                  <td
                    className={i % 2 === 0 ? 'odd-row' : 'even-row'}
                    style={{textAlign: 'center'}}
                  >
                    {player.height}
                  </td>
                  <td
                    className={i % 2 === 0 ? 'odd-row' : 'even-row'}
                    style={{textAlign: 'center'}}
                  >
                    {player.weight}
                  </td>
                  <td
                    className={i % 2 === 0 ? 'odd-row' : 'even-row'}
                    style={{textAlign: 'center'}}
                  >
                    {player.highSchool}
                  </td>
                  <td
                    className={i % 2 === 0 ? 'odd-row' : 'even-row'}
                    style={{textAlign: 'center'}}
                  >
                    {player.rivalsRanking}
                  </td>
                  <td
                    className={i % 2 === 0 ? 'odd-row' : 'even-row'}
                    style={{textAlign: 'center'}}
                  >
                    {player.espnRanking}
                  </td>
                  <td
                    className={i % 2 === 0 ? 'odd-row' : 'even-row'}
                    style={{textAlign: 'center'}}
                  >
                    {player.class}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Recruits
