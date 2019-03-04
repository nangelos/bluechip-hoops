import * as React from 'react'
export const RootContext = React.createContext({})

export class RootProvider extends React.Component {
  state = {
    setCurrentUser: user => this.setState({ user }),
    user: null
  }

  render() {
    const { children } = this.props
    return <RootContext.Provider value={this.state}>{children}</RootContext.Provider>
  }
}