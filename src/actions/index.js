// Action
export const incrementCounter = () => {
  return {
    type: 'ACTION_INCREMENT_COUNTER',
    count: 1
  }
}

export const decrementCounter = () => {
  return {
    type: 'ACTION_DECREMENT_COUNTER',
    count: -1
  }
}
