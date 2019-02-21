import React, {Component} from 'react'

class Calendar extends Component {
  state = {}
  url = 'https://calendar.google.com/calendar/embed?src=6n9c5qnu4i4a9d2v5qtmo8fqj0%40group.calendar.google.com&ctz=America%2FChicago'
  style = 'border: 0'

  render() {
    return (
      <div style={{textAlign: 'center', marginBottom: '10px'}}>
        <h3 style={{color: 'white'}}>Calendar of Upcoming Events</h3>
        <iframe
          src={this.url}
          style={{
            border: '5px white solid',
            width: '800px',
            height: '500px',
            padding: '5px',
            frameBorder: '0',
            scrolling: 'no'
          }}
        />
      </div>
    )
  }
}

export default Calendar
