import React, { Component, PropTypes } from 'react';

// Component
class Counter extends React.Component {
  render() {
    const { count, actions } = this.props
    return (
      <div>
        <p><span>Count: {count}</span></p>
        <div>
          <button onClick={actions.incrementCounter}>+1</button>
          <button onClick={actions.decrementCounter}>-1</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Counter
