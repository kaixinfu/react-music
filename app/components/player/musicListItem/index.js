import React, {Component} from 'react';
import Pubsub from 'pubsub-js';

import './index.less';

export default class MusicListItem extends Component {
  playMusic(item) {
    Pubsub.publish('PLAY_MUSIC', item)
  }
  deleteMusic(item, e) {
    e.stopPropagation()
    Pubsub.publish('DELETE_MUSIC', item)
  }
  render() {
    const {
      item
    } = this.props
    return (
      <li onClick={this.playMusic.bind(this, item)} className={`row components-listitem${this.props.focus ? ' focus' : ''}`}>
          <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
          <p onClick={this.deleteMusic.bind(this, item)}  className="-col-auto delete"></p>
      </li>
    )
  }
}
