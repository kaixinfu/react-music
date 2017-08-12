import React, {Component} from 'react';
import Header from './components/header'
import ProgressBar from './components/progressBar'

export default class Root extends Component {
  constructor() {
    super()
    this.onChangeProgressHandle = this.onChangeProgressHandle.bind(this)
    this.state = {
      progress: '-',
      duraction: null,
      backColor: '#2f9842'
    }
  }
  componentDidMount() {
    $('#player').jPlayer({
      ready: function() {
        $('#player').jPlayer('setMedia', {
          mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.mp3'
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
    $('#player').bind($.jPlayer.event.timeupdate, _ => {
      this.setState({
        duration: _.jPlayer.status.duration,
        progress: Math.round(_.jPlayer.status.currentPercentAbsolute)
      })
    })
  }
  componentWillUnMount() {
    $('#player').bind($.jPlayer.event.timeupdate)
  }
  onChangeProgressHandle(progress) {
    $('#player').jPlayer('play', this.state.duration * progress)
  }
  render() {
    const {
      backColor,
      progress
    } = this.state
    return (
      <div>
        <Header />
        <ProgressBar backColor={backColor} onChangeProgress={this.onChangeProgressHandle} progress={progress} />
      </div>
    )
  }
}
