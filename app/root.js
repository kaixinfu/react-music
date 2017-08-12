import React, {Component} from 'react';
import Header from './components/header'
import Player from './components/player'
import {MUSIC_LIST} from '../config/musicList'

export default class Root extends Component {
  constructor() {
    super()
    this.state = {
      currentMusicItem: MUSIC_LIST[0]
    }
  }
  componentDidMount() {
    $('#player').jPlayer({
      ready: function() {
        $('#player').jPlayer('setMedia', {
          mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.mp3'
        // })
        }).jPlayer('play');
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
        <Player currentMusicItem = {this.state.currentMusicItem} />
      </div>
    )
  }
}
