import React, {Component} from 'react';
import Pubsub from 'pubsub-js'
import Header from './components/header'
import MusicList from './components/player/musicList'
import {MUSIC_LIST} from '../config/musicList'
import {Router, IndexRouter, Link, Route, hashHistory} from 'react-router'

export default class App extends Component {
  constructor() {
    super()
    this.playMusic = this.playMusic.bind(this)
    this.playNext = this.playNext.bind(this)
    this.getMusicIndex = this.getMusicIndex.bind(this)
    this.state = {
      musicList: MUSIC_LIST,
      currentMusicItem: MUSIC_LIST[0]
    }
  }
  playMusic(miusicItem) {
    $('#player').jPlayer({
      ready: function() {
        $('#player').jPlayer('setMedia', {
          mp3: miusicItem.file
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    })
    this.setState({
      currentMusicItem: miusicItem
    })
  }
  componentDidMount() {
    $("#player").jPlayer({
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});
    this.playMusic(this.state.currentMusicItem)
    Pubsub.subscribe('PLAY_MUSIC', (msg, miusicItem) => {
      this.playMusic(miusicItem)
    })
    Pubsub.subscribe('DELETE_MUSIC', (msg, miusicItem) => {
      this.setState({
        musicList: this.state.musicList.filter(_ => _ !== miusicItem)
      })
    })
    Pubsub.subscribe('PLAY_PREV', (msg, miusicItem) => {
      this.playNext('prev')
    })
    Pubsub.subscribe('PLAY_NEXT', (msg, miusicItem) => {
      this.playNext()
    })
    $('#player').bind($.jPlayer.event.ended, (e) => {
      this.playNext()
    })
  }
  componentWillUnMount() {
    Pubsub.subscribe('PLAY_MUSIC')
    Pubsub.subscribe('DELETE_MUSIC')
    Pubsub.subscribe('PLAY_PREV')
    Pubsub.subscribe('PLAY_NEXT')
    $('#player').unbind($.jPlayer.event.ended)
  }
  playNext(type = 'next') {
    let index = this.getMusicIndex(this.state.currentMusicItem)
    const length = this.state.musicList.length
    let newIndex = null
    if (type === 'next') {
      index ++
      newIndex = index % length
    } else {
      index --
      newIndex = (index + length) % length
    }
    this.playMusic(this.state.musicList[newIndex])
  }
  getMusicIndex(miusicItem) {
    return this.state.musicList.indexOf(miusicItem)
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
