import React, {Component} from 'react'

class RecruitTable extends Component {
  render() {
    const {recruitList, selectedYear} = this.props
    return (
      <div>
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
            {recruitList
              .filter(p => Number(p.class) === selectedYear)
              .map((player, i) => {
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
