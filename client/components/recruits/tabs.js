import React from 'react'

const TabRow = state => {
  const {changeYear, years} = state
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
                className={state.state.year === year ? 'active' : 'inactive'}
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
