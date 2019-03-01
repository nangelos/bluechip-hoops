import React from 'react'

const TabRow = props => {
  let {changeYear, years, selectedYear} = props
  console.log('tab.js props: ', props)
  return (
    <div>
      <ul className="tab-row">
        {years.map(year => {
          return (
            <li key={year}>
              <button
                type="submit"
                onClick={changeYear}
                style={{border: 'none'}}
                value={year}
                className={year === selectedYear ? 'active' : null}
              >
                {year}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TabRow
