import React, {Component} from 'react'

class RecruitTable extends Component {
  state = {}

  years = [2019, 2020, 2021, 2022]

  render() {
    const {recruitList} = this.props
    return (
      <div>
        <ul className="tab-row">
          {this.years.map(year => {
            return (
              <li key={year} /*className="nav-item"*/>
                <a className="year-tabs" href={`#${year}`}>
                  {year}
                </a>
              </li>
            )
          })}
        </ul>
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
            {/*eslint-disable complexity*/}
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

export default RecruitTable
