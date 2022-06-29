import React, { Component } from 'react'

// Define state
const initialState = {
  name: 'Kathleen',
  message: 'New message'
}

// Define type of state
type State = Readonly<typeof initialState>

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    // Expecting state variable to be State type and intialState passed through to use as props
    readonly state: State = initialState

    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      )
    }
  }

  return HOC;
}

export default messageHoc;


