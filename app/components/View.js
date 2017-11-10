import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as musicActions from '../actions/music'

class App extends Component {
  constructor() {
    super()
    this.state = {
    
    }
  }
  render() {
      console.log(this.props)
    return (
        <div>222222222222</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  items: state.music.items.list || [],
  data: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  musicActions: bindActionCreators(musicActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
