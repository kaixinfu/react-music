import React, {Component} from 'react';
import {Link} from 'react-router'
import Pubsub from 'pubsub-js';
import ProgressBar from '../commont/progressBar'
import './index.less'

let duraction = null

export default class Player extends Component {
  constructor() {
    super()
    this.onChangeProgressHandle = this.onChangeProgressHandle.bind(this)
    this.onChangeVolumeHandle = this.onChangeVolumeHandle.bind(this)
    this.playFlag = this.playFlag.bind(this)
    this.state = {
      progress: 0,
      volume: 0,
      backColor: '#2f9842',
      volumeBackColor: 'red',
      isPlay: true,
      endTime: ''
    }
  }
  componentDidMount() {
    $('#player').bind($.jPlayer.event.timeupdate, (e) => {
      duraction = e.jPlayer.status.duration
      const volume = e.jPlayer.options.volume
      const currentPercentAbsolute = e.jPlayer.status.currentPercentAbsolute
      this.setState({
        progress: Math.round(currentPercentAbsolute),
        volume:  volume * 100,
        endTime: this.getTime(duraction * (1 - currentPercentAbsolute / 100))
      })
    })
  }
  componentWillUnMount() {
    $('#player').unbind($.jPlayer.event.timeupdate)
  }
  getTime(time) {
    time = Math.floor(time)
    let miniutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    seconds = seconds < 10 ? '0' + seconds : seconds
    return miniutes + ':' + seconds
  }
  onChangeProgressHandle(progress) {
    $('#player').jPlayer('play', duraction * progress)
  }
  onChangeVolumeHandle(progress) {
    $('#player').jPlayer('volume', progress)
  }
  playFlag() {
    if (this.state.isPlay) {
      $('#player').jPlayer('pause')
    } else {
      $('#player').jPlayer('play')
    }
    this.setState({
      isPlay: !this.state.isPlay
    })
  }
  playPrev() {
    Pubsub.publish('PLAY_PREV')
  }
  playNext() {
    Pubsub.publish('PLAY_NEXT')
  }
  render() {
    const {
      progress,
      volume,
      backColor,
      endTime,
      volumeBackColor,
    } = this.state
    const {
      currentMusicItem: {
        title,
        artist,
        cover
      }
    } = this.props
    return (
      <div className="player-page">
               <h1 className="caption">
                <Link to="/list">我的私人音乐坊 &gt;</Link>
               </h1>
               <div className="mt20 row">
                 <div className="controll-wrapper">
                   <h2 className="music-title">{title}</h2>
                   <h3 className="music-artist mt10">{artist}</h3>
                   <div className="row mt20">
                     <div className="left-time -col-auto">-{endTime}</div>
                     <div className="volume-container">
                       <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                       <div className="volume-wrapper">
                         <ProgressBar
                           progress={volume}
                           backColor={volumeBackColor}
                           onChangeProgress={this.onChangeVolumeHandle}
                         />
                       </div>
                     </div>
                   </div>
                   <div style={{height: 10, lineHeight: '10px', marginTop: '20px'}}>
                     <ProgressBar
                       progress={progress}
                       backColor={backColor}
                       onChangeProgress={this.onChangeProgressHandle}
                     />
                   </div>
                   <div className="mt35 row">
                     <div>
                       <i className="icon prev" onClick={this.playPrev}></i>
                       <i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.playFlag}></i>
                       <i className="icon next ml20" onClick={this.playNext}></i>
                     </div>
                     <div className="-col-auto">
                       <i className='icon repeat-cycle' onClick={this.changeRepeat}></i>
                     </div>
                   </div>
                 </div>
                 <div className="-col-auto cover">
                   <img src={cover} alt={title} />
                 </div>
               </div>
           </div>
    )
  }
}
