import React, {Component} from 'react';
import Header from './components/header'
import MusicList from './components/player/musicList'
import {MUSIC_LIST} from '../config/musicList'
import {Router, IndexRouter, Link, Route, hashHistory} from 'react-router'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      musicList: MUSIC_LIST,
      currentMusicItem: MUSIC_LIST[2]
    }
  }
  componentDidMount() {
    $('#player').jPlayer({
      ready: function() {
        $('#player').jPlayer('setMedia', {
          mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.mp3'
        })
        // }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
  }
  componentWillUnMount() {
  }
  onChangeProgressHandle(progress) {
  }
  render() {
    return (
      <div>
        <Header />
        {
          React.cloneElement(this.props.children, this.state)
        }
      </div>
    )
  }
}
