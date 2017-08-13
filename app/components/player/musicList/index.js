import React, {Component} from 'react';
import MusicListItem from '../musicListItem'
import '../index.less';

export default class MusicList extends Component {
  render() {
    const {
      musicList,
      currentMusicItem
    } = this.props
    return (
      <ul>
        {
          musicList.map((item, key) => <MusicListItem focus={item === currentMusicItem} key={key} item={item} />)
        }
      </ul>
    )
  }
}
