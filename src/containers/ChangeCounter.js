import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from '../components/Counter'
import * as CounterActions from '../actions'

// Containers
const mapStateToPropsContainer = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToPropsContainer = (dispatch) => {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

const App = connect(
  mapStateToPropsContainer,
  mapDispatchToPropsContainer
)(Counter)

export default App
