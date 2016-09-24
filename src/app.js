import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Action
const ACTION_INCREMENT_COUNTER = {
  type: 'ACTION_INCREMENT_COUNTER',
  count: 1
}

const ACTION_DECREMENT_COUNTER = {
  type: 'ACTION_DECREMENT_COUNTER',
  count: -1
}

// Reducer
function counterReducer(state={count: 0}, action) {
  let count = state.count
  switch (action.type) {
    case 'ACTION_INCREMENT_COUNTER':
      return {count: count + action.count}
    case 'ACTION_DECREMENT_COUNTER':
      return {count: count + action.count}
    default:
      return state
  }
}

// Component
class CounterComponent extends React.Component {
  render() {
    const {count, onClickPlus, onClickMinus} = this.props
    return (
      <div>
        <p><span>Count: {count}</span></p>
        <div>
          <button onClick={onClickPlus}>+1</button>
          <button onClick={onClickMinus}>-1</button>
        </div>
      </div>
    )
  }
}

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  onClickPlus: PropTypes.func.isRequired
}

// Containers
function mapStateToPropsContainer(state) {
  return {
    count: state.count
  }
}

function mapDispatchToPropsContainer(dispatch) {
  return {
    onClickPlus: () => dispatch(ACTION_INCREMENT_COUNTER),
    onClickMinus: () => dispatch(ACTION_DECREMENT_COUNTER)
  }
}

let App = connect(
  mapStateToPropsContainer,
  mapDispatchToPropsContainer
)(CounterComponent)

// main
let store = createStore(counterReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
)
