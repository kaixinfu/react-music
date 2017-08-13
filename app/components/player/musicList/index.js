import React, {Component} from 'react';
import {Link} from 'react-router'
import MusicListItem from '../musicListItem'
import '../index.less';

export default class MusicList extends Component {
  render() {
    const {
      musicList,
      currentMusicItem
    } = this.props
    return (
      <div>
      <div><Link to="/">{'<'}</Link></div>
      <ul>
        {
          musicList.map((item, key) => <MusicListItem focus={item === currentMusicItem} key={key} item={item} />)
        }
      </ul>
      </div>
    )
  }
}
