import React, {Component} from 'react';
import {Router, IndexRoute, Link, Route, hashHistory} from 'react-router'

// import Header from './components/header'
import Player from './components/player'
import MusicList from './components/player/musicList'
// import {MUSIC_LIST} from '../config/musicList'
import App from './app'

export default class Root extends Component {
  render() {
    console.log('root', this.props)
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Player} ></IndexRoute>
          <Route path="/list" component={MusicList}></Route>
        </Route>
      </Router>
    )
  }
}
