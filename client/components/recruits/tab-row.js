import React from 'react'
import styled from 'styled-components'

const Tab = styled.button`
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  border: 2px solid transparent;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 5px;
  width: 70px;
`

const AllTabs = styled.ul`
  display: flex;
  margin-bottom: 0px;
  height: 40px;
`
const TabRow = props => {
  let {changeYear, years, selectedYear} = props
  return (
    <div>
      <AllTabs>
        {years.map(year => {
          return (
            <Tab
              key={year}
              active={year === selectedYear}
              type="submit"
              onClick={() => changeYear(year)}
              style={{border: 'none'}}
              value={year}
            >
              {year}
            </Tab>
          )
        })}
      </AllTabs>
    </div>
  )
}

export default TabRow
