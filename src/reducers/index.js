// Reducer
const counter = (state={count: 0}, action) => {
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

export default counter
